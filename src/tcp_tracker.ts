import { EventEmitter } from "stream";
import { PacketBuffer } from "./pkt-buffer";
type IPv4 = {
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
type TCP = {
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
export class TCPTracker extends EventEmitter {
  sessions: { [key: string]: TCPSession };
  listening_port: number;
  constructor(listening_port: number) {
    super();
    this.sessions = {};
    this.listening_port = listening_port;
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
      is_new = true;
      session = new TCPSession(this.listening_port);
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
  state: "NONE" | "SYN_SENT" | "SYN_RCVD" | "ESTAB" | "FIN_WAIT" | "CLOSE_WAIT" | "LAST_ACK" | "CLOSING" | "CLOSED";
  src?: string;
  dst?: string;

  send_seqno: number; // Current seq number flushed
  send_buffers: TCPSegment[];

  recv_seqno: number; // Current seq number flushed
  recv_buffers: TCPSegment[];
  listening_port: number;

  is_ignored: boolean;
  packetBuffer: PacketBuffer;

  constructor(listening_port: number) {
    super();
    this.listening_port = listening_port;

    this.state = "NONE";
    this.send_seqno = 0;
    this.send_buffers = [];

    this.recv_seqno = 0;
    this.recv_buffers = [];
    this.is_ignored = false;
    this.packetBuffer = new PacketBuffer();

    EventEmitter.call(this);
  }
  track(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;

    if (this.state === "NONE") {
      //Detect connection direction & filter out outgoing connections from listening port (local:6040->remote:????)
      if (isLocalIp(ip.info.srcaddr) && this.listening_port === tcp.info.dstport) {
        //local:????->xx.xx.xx.xx:6040
        this.src = src;
        this.dst = dst;
      } else if (this.listening_port === tcp.info.srcport && isLocalIp(ip.info.dstaddr)) {
        //xx.xx.xx.xx:6040->local:????
        this.src = dst;
        this.dst = src;
      } else {
        this.src = src;
        this.dst = dst;
        this.is_ignored = true; //We set to ignore this session, but we still want to track for connection start/end
      }
      if (tcp.info.flags & TCPFlags.syn && !(tcp.info.flags & TCPFlags.ack)) {
        // initial SYN, best case
        this.state = "SYN_SENT";
      } else {
        // joining session already in progress
        this.state = "ESTAB"; // I mean, probably established, right? Unless it isn't.
      }
    } else if (tcp.info.flags & TCPFlags.syn && !(tcp.info.flags & TCPFlags.ack)) {
      //this.emit("syn retry", this);
    } else {
      // not a SYN, so run the state machine
      this[this.state](buffer, ip, tcp);
    }
  }
  SYN_SENT(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.dst && tcp.info.flags & (TCPFlags.ack | TCPFlags.syn)) {
      this.send_seqno = tcp.info.ackno ?? 0;
      this.state = "SYN_RCVD";
    } else if (tcp.info.flags & TCPFlags.rst) {
      this.state = "CLOSED";
      //this.emit("reset", this, "recv"); // TODO - check which direction did the reset, probably recv
      //    } else {
      //        console.log("Didn't get SYN-ACK packet from dst while handshaking: " + util.inspect(tcp, false, 4));
    }
  }
  SYN_RCVD(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.src && tcp.info.flags & TCPFlags.ack) {
      // TODO - make sure SYN flag isn't set, also match src and dst
      this.recv_seqno = tcp.info.ackno ?? 0;
      //this.emit("start", this);
      this.state = "ESTAB";
      //    } else {
      //        console.log("Didn't get ACK packet from src while handshaking: " + util.inspect(tcp, false, 4));
    }
  }
  // TODO - actually implement SACK decoding and tracking
  // if (tcp.options.sack) {
  //     console.log("SACK magic, handle this: " + util.inspect(tcp.options.sack));
  //     console.log(util.inspect(ip, false, 5));
  // }
  // TODO - check for tcp.flags.rst and emit reset event
  ESTAB(buffer: Buffer, ip: IPv4, tcp: TCP) {
    if (this.is_ignored) return; //Ignore data transfert

    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(buffer, ip, tcp);
    } catch {
      return;
    }
    if (src === this.src) {
      // this packet came from the active opener / client
      if (tcpDataLength > 0) {
        //We store the the segment in the buffers list
        this.send_buffers.push({
          seqno: tcp.info.seqno,
          payload: Buffer.from(buffer.subarray(tcp.offset, tcp.offset + tcpDataLength)),
        });
      }
      if (tcp.info.ackno && !is_sack) {
        this.flush_buffers(tcp.info.ackno ?? 0, "recv");
      }
      // console.log("sending ACK for packet we didn't see received: " + tcp.info.ackno ?? 0);
      if (tcp.info.flags & TCPFlags.fin) {
        this.state = "FIN_WAIT";
      } else if (tcp.info.flags & TCPFlags.rst) {
        this.emit("end", this);
      }
    } else if (src === this.dst) {
      if (tcpDataLength > 0) {
        //We store the the segment in the buffers list
        this.recv_buffers.push({
          seqno: tcp.info.seqno,
          payload: Buffer.from(buffer.subarray(tcp.offset, tcp.offset + tcpDataLength)),
        });
      }
      if (tcp.info.ackno && !is_sack) {
        this.flush_buffers(tcp.info.ackno ?? 0, "send");
      }
      if (tcp.info.flags & TCPFlags.fin) {
        this.state = "CLOSE_WAIT";
      } else if (tcp.info.flags & TCPFlags.rst) {
        this.emit("end", this);
      }
    } else {
      console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip=" + ip + "tcp=" + tcp);
    }
  }
  // TODO - need to track half-closed data
  FIN_WAIT(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.dst && tcp.info.flags & TCPFlags.fin) {
      this.state = "CLOSING";
    }
  }
  // TODO - need to track half-closed data
  CLOSE_WAIT(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.src && tcp.info.flags & TCPFlags.fin) {
      this.state = "LAST_ACK";
    }
  }
  // TODO - need to track half-closed data
  LAST_ACK(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.dst) {
      this.state = "CLOSED";
      this.emit("end", this);
    }
  }
  // TODO - need to track half-closed data
  CLOSING(buffer: Buffer, ip: IPv4, tcp: TCP) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;

    if (src === this.src) {
      this.state = "CLOSED";
      this.emit("end", this);
    }
  }
  CLOSED(buffer: Buffer, ip: IPv4, tcp: TCP) {
    // not sure what to do here. We are closed, so I guess bump some counters or something.
  }
  flush_buffers(ackno: number, direction: Direction) {
    //We assume that seqno/ackno will never overflow (2^32 bytes ~ 4.3GB)
    if (direction === "recv") {
      //Update seqno when unknown
      if (this.recv_seqno === 0) this.recv_seqno = ackno;
      //Get ordered buffers
      const flush_payload = this.get_flush(this.recv_buffers, this.recv_seqno, ackno);
      this.recv_seqno = ackno;
      if (!flush_payload) {
        //can't flush payload, missing some of it, dropping
        return;
      }
      this.packetBuffer.write(flush_payload);
      let pkt = this.packetBuffer.read();
      while (pkt) {
        this.emit("payload_recv", pkt);
        pkt = this.packetBuffer.read();
      }
    } else if (direction === "send") {
      //Update seqno when unknown
      if (this.send_seqno === 0) this.send_seqno = ackno;
      //Get ordered buffers
      const flush_payload = this.get_flush(this.send_buffers, this.send_seqno, ackno);
      this.send_seqno = ackno;
      if (!flush_payload) {
        //can't flush payload, missing some of it, dropping
        return;
      }
      //We ignore data sent
      //this.emit("payload_send", flush_payload);
    }
  }
  get_flush(buffers: TCPSegment[], seqno: number, ackno: number): Buffer | null {
    const totalLen = ackno - seqno;
    if (totalLen <= 0) return null;
    let flush_payload = Buffer.alloc(totalLen);
    let flush_mask = Buffer.alloc(totalLen);
    const newBuffers = buffers.filter((segment) => {
      if (segment.seqno > ackno) return true; //Not aknowledged, keep the payload for later
      if (segment.seqno < seqno) {
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
      const len_to_flush = ackno - segment.seqno;
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
    //Update stored buffers:
    buffers.length = 0;
    buffers.push(...newBuffers);
    //TODO: use a mask (or anything) to be sure we got all the portions of the payload
    //We apply the mask to remove unknown portions (probably can be fixed by implementing sack)
    if (flush_mask.includes(0)) {
      console.warn(`[meter-core/tcp_tracker] - Dropped ${totalLen} bytes`);
      return null;
    }
    return flush_payload;
  }
}
function is_sack_in_header(buffer: Buffer, ip: IPv4, tcp: TCP) {
  if (tcp.hdrlen == 20) return false;
  //Parse TCP Options (//TODO: move to cap/decoders ?)
  let options_offset = ip.offset + ip.hdrlen + 20;
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
        throw new Error(`Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`); //unknown option drop packet
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
