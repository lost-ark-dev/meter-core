import { EventEmitter } from "stream";
import { IPTracker } from "./ip_tracker";
import { PacketBuffer } from "./pkt-buffer";
export type IPv4 = {
  info: {
    hdrlen: number;
    dscp: number;
    ecn: number;
    totallen: number;
    id: number;
    flags: number;
    fragoffset: number;
    ttl: number;
    protocol: number;
    hdrchecksum: undefined;
    srcaddr: string;
    dstaddr: string;
  };
  offset: number;
  hdrlen: number;
};
export type TCP = {
  info: {
    srcport: number;
    dstport: number;
    seqno: number;
    ackno?: number;
    flags: number;
    window: number;
    checksum: number;
    urgentptr?: number;
  };
  hdrlen: number;
  offset: number;
};
enum TCPFlags {
  none = 0,
  fin = 1 << 0,
  syn = 1 << 1,
  rst = 1 << 2,
  psh = 1 << 3,
  ack = 1 << 4,
  urg = 1 << 5,
  ece = 1 << 6,
  cwr = 1 << 7,
  nonce = 1 << 8,
}
type Direction = "send" | "recv";
export type ListenOptions = {
  ip: string;
  mask: string;
  port: number;
};
export class TCPTracker extends EventEmitter {
  sessions: { [key: string]: TCPSession };
  listen_options: ListenOptions;
  constructor(listen_options: ListenOptions) {
    super();
    this.sessions = {};
    this.listen_options = listen_options;
    EventEmitter.call(this);
  }
  track_packet(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    let key: string;
    if (src < dst) {
      key = src + "-" + dst;
    } else {
      key = dst + "-" + src;
    }

    let is_new = false;
    let session = this.sessions[key];
    if (!session) {
      //if (tcp.info.flags & TCPFlags.rst || tcp.info.flags & TCPFlags.fin) return; //Connexion is supposed to be closing, ignoring
      if (!(tcp.info.flags & TCPFlags.psh) && !(tcp.info.flags & TCPFlags.syn)) return; //Wait for a syn or psh to create session
      is_new = true;
      session = new TCPSession(this.listen_options);
      this.sessions[key] = session;
      session.on("end", () => {
        delete this.sessions[key];
        console.info(
          `[meter-core/tcp-tracker] - Remove session ${session?.src}->${session?.dst} (Total: ${
            Object.keys(this.sessions).length
          })`
        );
      });
    }

    session.track(buffer, ip, tcp);

    // need to track at least one packet before we emit this new session, otherwise nothing
    // will be initialized.
    if (is_new) {
      this.emit("session", session);
    }
  }
}
type TCPSegment = {
  seqno: number;
  payload: Buffer;
};
export class TCPSession extends EventEmitter {
  state: "NONE" | "ESTAB";
  src?: string;
  dst?: string;

  send_seqno: number; // Current seq number flushed
  send_buffers: TCPSegment[];

  recv_seqno: number; // Current seq number flushed
  recv_buffers: TCPSegment[];
  listen_options: ListenOptions;

  is_ignored: boolean;
  packetBuffer: PacketBuffer;

  send_ip_tracker: IPTracker;
  recv_ip_tracker: IPTracker;

  skip_socks5: number;
  in_handshake: boolean;

  constructor(listen_options: ListenOptions) {
    super();
    this.listen_options = listen_options;

    this.state = "NONE";
    this.send_seqno = 0;
    this.send_buffers = [];

    this.recv_seqno = 0;
    this.recv_buffers = [];
    this.is_ignored = false;
    this.packetBuffer = new PacketBuffer();

    this.send_ip_tracker = new IPTracker();
    this.recv_ip_tracker = new IPTracker();
    this.send_ip_tracker.on("segment", this.handle_send_segment.bind(this));
    this.recv_ip_tracker.on("segment", this.handle_recv_segment.bind(this));

    this.skip_socks5 = 0;
    this.in_handshake = true;

    EventEmitter.call(this);
  }
  track(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    //console.log(src, dst, tcp.info.seqno, tcp.info.ackno);
    if (this.state === "NONE") {
      //Detect connection direction & filter out outgoing connections from listening port (local:6040->remote:????)
      const isSrcDeviceIp = isDeviceIp(ip.info.srcaddr, this.listen_options);
      const isDstDeviceIp = isDeviceIp(ip.info.dstaddr, this.listen_options);
      if (isSrcDeviceIp && this.listen_options.port === tcp.info.dstport) {
        //local:????->xx.xx.xx.xx:6040
        this.src = src;
        this.dst = dst;
      } else if (this.listen_options.port === tcp.info.srcport && isDstDeviceIp) {
        //xx.xx.xx.xx:6040->local:????
        this.src = dst;
        this.dst = src;
      } else if (!isSrcDeviceIp && !isDstDeviceIp) {
        /*
        Here we want to handle very special edge case where user uses VM, has a public IP on his host,
        and a private ip his VM that doesn't match the host subnet.

        Most accurate ways would be to:
        - settings 
        or
        - checking for remoteserver being on amazon range (as well as port 6040), this will help a lot
        
        But we will try to see how it goes by just checking the listening port,
        the drawback is that it'll listen on bad connections like "local:6040->remote:????", but it should be ignored later because opcodes won't match or parsing will fail
        */
        if (this.listen_options.port === tcp.info.dstport) {
          this.src = src;
          this.dst = dst;
        } else if (this.listen_options.port === tcp.info.srcport) {
          this.src = dst;
          this.dst = src;
        } else {
          this.src = src;
          this.dst = dst;
          this.is_ignored = true;
        }
      } else {
        this.src = src;
        this.dst = dst;
        this.is_ignored = true; //We set to ignore this session, but we still want to track for connection start/end
      }
      this.state = "ESTAB";
      //}
    }
    if (tcp.info.flags & TCPFlags.rst || tcp.info.flags & TCPFlags.fin) {
      //Process last data received
      this.ESTAB(buffer, ip, tcp);
      this.emit("end", this);
    } else {
      //process estab
      this.ESTAB(buffer, ip, tcp);
    }
  }

  ESTAB(buffer: Buffer, ip: IPv4, tcp: TCP) {
    if (this.is_ignored) return; //Ignore data transfert
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src) {
      this.handle_recv_segment(buffer, ip, tcp);
    } else if (src === this.dst) {
      this.handle_send_segment(buffer, ip, tcp);
    } else {
      console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip=" + ip + "tcp=" + tcp);
    }
  }

  flush_buffers(ackno: number, direction: Direction) {
    //We assume that seqno/ackno will never overflow (2^32 bytes ~ 4.3GB)
    if (direction === "recv") {
      //Update seqno when unknown
      if (this.recv_seqno === 0) {
        this.recv_seqno = ackno;
      }
      //Get ordered buffers
      const flush_payload = TCPSession.get_flush(this.recv_buffers, this.recv_seqno, ackno);

      if (!flush_payload) {
        //can't flush payload, missing some of it, dropping
        return;
      }
      this.recv_seqno = ackno;
      if (this.in_handshake && flush_payload.length === 2 && flush_payload.equals(Buffer.from([5, 2])))
        this.skip_socks5 = 4;
      if (this.skip_socks5 > 0) {
        this.skip_socks5--;
        return;
      }
      this.in_handshake = false;
      this.packetBuffer.write(flush_payload);
      let pkt;
      while ((pkt = this.packetBuffer.read())) {
        this.emit("payload_recv", pkt);
      }
    } else if (direction === "send") {
      //We ignore data sent
      /*
      //Update seqno when unknown
      if (this.send_seqno === 0) this.send_seqno = ackno;
      //Get ordered buffers
      const flush_payload = TCPSession.get_flush(this.send_buffers, this.send_seqno, ackno);
      if (!flush_payload) {
        //can't flush payload, missing some of it, dropping
        return;
      }
      this.send_seqno = ackno;
      //this.emit("payload_send", flush_payload);
      */
    }
  }
  static get_flush(buffers: TCPSegment[], seqno: number, ackno: number): Buffer | null {
    const totalLen = ackno - seqno;
    if (totalLen <= 0) return null;
    let flush_payload = Buffer.alloc(totalLen);
    let flush_mask = Buffer.alloc(totalLen);
    const newBuffers = buffers.filter((segment) => {
      if (segment.seqno > ackno) return true; //Not aknowledged, keep the payload for later
      if (segment.seqno < seqno) {
        // Our segment is fully outdated, drop it
        if (segment.seqno + segment.payload.length < seqno) return false;

        //Our stored segent contains data that has already been flushed, edit it
        segment.payload = segment.payload.subarray(seqno - segment.seqno);
        segment.seqno = seqno;
      }
      //Append payload to flush payload
      /**
       * 5 cases:
       * - segment is the same size & perfect fit
       * - semgent is shorter (inside)
       * - segment is the same size & overlap (after)
       * - segment is shorter and overlap (after)
       * - segment is longer and overlap (after)
       * ----------
       * Early overlap doesn't exist as we drop that data just before, so we always copy segment from 0
       */
      const flush_offset = segment.seqno - seqno;
      const len_to_flush = Math.min(ackno - segment.seqno, segment.payload.length);
      segment.payload.copy(flush_payload, flush_offset, 0, len_to_flush);
      flush_mask.fill(1, flush_offset, flush_offset + len_to_flush);
      if (len_to_flush < segment.payload.length) {
        //Segment is overlapping
        segment.payload = segment.payload.subarray(len_to_flush);
        segment.seqno += len_to_flush;
        return true;
      }
      return false;
    });
    //TODO: use a mask (or anything) to be sure we got all the portions of the payload
    //We apply the mask to remove unknown portions (probably can be fixed by implementing sack)
    if (flush_mask.includes(0)) {
      //console.log(flush_mask.toString("hex"));
      if (buffers.length >= 50) {
        //TODO: add a fail count for a given ack to not flush that many buffers, and then, only flush buffers in between

        console.warn(`[meter-core/tcp_tracker] - Dropped ${totalLen} bytes`);
        return Buffer.alloc(0); // We send valid buffer so that it acts as processed data
      }
      return null;
    } else {
      //TODO: reset fail count as we successfully flushed
      //Update stored buffers:
      buffers.length = 0;
      buffers.push(...newBuffers);
      return flush_payload;
    }
  }
  handle_recv_segment(packet: Buffer, ip: IPv4, tcp: TCP) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    // this packet came from the active opener / client
    if (tcpDataLength > 0) {
      //We store the the segment in the buffers list
      this.send_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength)),
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "recv");
    }
  }
  handle_send_segment(packet: Buffer, ip: IPv4, tcp: TCP) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (tcpDataLength > 0) {
      //We store the the segment in the buffers list
      this.recv_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength)),
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "send");
    }
  }
}
function is_sack_in_header(buffer: Buffer, ip: IPv4, tcp: TCP) {
  if (tcp.hdrlen == 20) return false;
  //Parse TCP Options (//TODO: move to cap/decoders ?)
  let options_offset = ip.offset + 20;
  const options_len = tcp.hdrlen - 20;
  const end_offset = options_offset + options_len;
  while (options_offset < end_offset) {
    switch (buffer[options_offset]) {
      case 0: //end
        options_offset = end_offset;
        break;
      case 1: //pad/nop
        options_offset += 1;
        break;
      case 2: //mss
        options_offset += 4;
        break;
      case 3: //window_scale
        options_offset += 3;
        break;
      case 4: //sack_ok
        options_offset += 2;
        break;
      case 5:
        //We don't need to parse sack, we just want to know that there is
        return true;
      case 8: //timestamp
        options_offset += 10;
        break;
      case 254: //rfc8994
      case 255:
        options_offset += buffer[options_offset + 1] ?? 1;
        break;
      default:
        throw new Error(
          `[meter-core/tcp-tracker] - Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`
        ); //unknown option drop packet
    }
  }
  return false;
}

//from: https://github.com/DylanPiercey/is-local-ip/blob/master/index.js
//We don't use pkg as it's overkill & doesn't have typings as well
const RANGES = [
  // 10.0.0.0 - 10.255.255.255
  /^(::f{4}:)?10\.\d{1,3}\.\d{1,3}\.\d{1,3}/,
  // 127.0.0.0 - 127.255.255.255
  /^(::f{4}:)?127\.\d{1,3}\.\d{1,3}\.\d{1,3}/,
  // 169.254.1.0 - 169.254.254.255
  /^(::f{4}:)?169\.254\.([1-9]|1?\d\d|2[0-4]\d|25[0-4])\.\d{1,3}/,
  // 172.16.0.0 - 172.31.255.255
  /^(::f{4}:)?(172\.1[6-9]|172\.2\d|172\.3[0-1])\.\d{1,3}\.\d{1,3}/,
  // 192.168.0.0 - 192.168.255.255
  /^(::f{4}:)?192\.168\.\d{1,3}\.\d{1,3}/,
  // fc00::/7
  /^f[c-d][0-9a-f]{2}(::1$|:[0-9a-f]{1,4}){1,7}/,
  // fe80::/10
  /^fe[89ab][0-9a-f](::1$|:[0-9a-f]{1,4}){1,7}/,
];

/**
 * Tests that an ip address is one that is reserved for local area, or internal networks.
 */
function isLocalIp(address: string) {
  return (
    address === "::" ||
    address === "::1" ||
    RANGES.some(function (it) {
      return it.test(address);
    })
  );
}
//from https://stackoverflow.com/questions/503052/javascript-is-ip-in-one-of-these-subnets
function IPnumber(IPaddress: string) {
  var ip = IPaddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (ip && ip.length === 5) {
    return (+ip[1]! << 24) + (+ip[2]! << 16) + (+ip[3]! << 8) + +ip[4]!;
  }
  return null;
}
/**
 * Tests that an ip address is one that is reserved for local area, or internal networks.
 */
function isDeviceIp(ip: string, listen_options: ListenOptions) {
  const testIp = IPnumber(ip),
    listen_ip = IPnumber(listen_options.ip),
    mask = IPnumber(listen_options.mask);
  if (!testIp || !listen_ip || !mask) return false;
  return (testIp & mask) === (listen_ip & mask);
}
