import {
  PacketBuffer
} from "./chunk-32GW4DAM.mjs";
import "./chunk-NZTU4WRF.mjs";

// src/pkt-capture.ts
import cap from "cap";
import { isIPv4 } from "net";
import { TypedEmitter } from "tiny-typed-emitter";

// src/tcp_tracker.ts
import { EventEmitter as EventEmitter2 } from "stream";

// src/ip_tracker.ts
import { EventEmitter } from "stream";
var MAX_ID = 65536;
var IPTracker = class extends EventEmitter {
  next_id = -1;
  stored = {};
  track(packet, ip, tcp) {
    if (this.next_id === -1) {
      this.set_current_id(ip.info.id);
    }
    if (Math.abs(this.next_id - ip.info.id) >= 10) {
      this.increment_id();
    }
    this.stored[ip.info.id] = { packet, ip, tcp };
    if (this.next_id in this.stored) {
      let segment = this.stored[this.next_id];
      while (segment !== void 0) {
        this.emit("segment", segment.packet, segment.ip, segment.tcp);
        delete this.stored[this.next_id];
        this.increment_id();
        segment = this.stored[this.next_id];
      }
    }
    console.log(ip.info.id, this.next_id, ip.info.id === this.next_id, Object.keys(this.stored));
  }
  increment_id() {
    this.next_id = (this.next_id + 1) % MAX_ID;
  }
  set_current_id(current_id) {
    this.next_id = current_id % MAX_ID;
  }
  set_next_id(current_id) {
    this.next_id = (current_id + 1) % MAX_ID;
  }
};

// src/tcp_tracker.ts
var TCPTracker = class extends EventEmitter2 {
  sessions;
  listen_options;
  constructor(listen_options) {
    super();
    this.sessions = {};
    this.listen_options = listen_options;
    EventEmitter2.call(this);
  }
  track_packet(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    let key;
    if (src < dst) {
      key = src + "-" + dst;
    } else {
      key = dst + "-" + src;
    }
    let is_new = false;
    let session = this.sessions[key];
    if (!session) {
      if (!(tcp.info.flags & 8 /* psh */) && !(tcp.info.flags & 2 /* syn */))
        return;
      is_new = true;
      session = new TCPSession(this.listen_options);
      this.sessions[key] = session;
      session.on("end", () => {
        delete this.sessions[key];
        console.info(
          `[meter-core/tcp-tracker] - Remove session ${session?.src}->${session?.dst} (Total: ${Object.keys(this.sessions).length})`
        );
      });
    }
    session.track(buffer, ip, tcp);
    if (is_new) {
      this.emit("session", session);
    }
  }
};
var TCPSession = class extends EventEmitter2 {
  state;
  src;
  dst;
  send_seqno;
  send_buffers;
  recv_seqno;
  recv_buffers;
  listen_options;
  is_ignored;
  packetBuffer;
  send_ip_tracker;
  recv_ip_tracker;
  skip_socks5;
  in_handshake;
  constructor(listen_options) {
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
    EventEmitter2.call(this);
  }
  track(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    if (this.state === "NONE") {
      const isSrcDeviceIp = isDeviceIp(ip.info.srcaddr, this.listen_options);
      const isDstDeviceIp = isDeviceIp(ip.info.dstaddr, this.listen_options);
      if (isSrcDeviceIp && this.listen_options.port === tcp.info.dstport) {
        this.src = src;
        this.dst = dst;
      } else if (this.listen_options.port === tcp.info.srcport && isDstDeviceIp) {
        this.src = dst;
        this.dst = src;
      } else if (!isSrcDeviceIp && !isDstDeviceIp) {
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
        this.is_ignored = true;
      }
      this.state = "ESTAB";
    }
    if (tcp.info.flags & 4 /* rst */ || tcp.info.flags & 1 /* fin */) {
      this.ESTAB(buffer, ip, tcp);
      this.emit("end", this);
    } else {
      this.ESTAB(buffer, ip, tcp);
    }
  }
  ESTAB(buffer, ip, tcp) {
    if (this.is_ignored)
      return;
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src) {
      this.handle_recv_segment(buffer, ip, tcp);
    } else if (src === this.dst) {
      this.handle_send_segment(buffer, ip, tcp);
    } else {
      console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip=" + ip + "tcp=" + tcp);
    }
  }
  flush_buffers(ackno, direction) {
    if (direction === "recv") {
      if (this.recv_seqno === 0) {
        this.recv_seqno = ackno;
      }
      const flush_payload = TCPSession.get_flush(this.recv_buffers, this.recv_seqno, ackno);
      if (!flush_payload) {
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
      while (pkt = this.packetBuffer.read()) {
        this.emit("payload_recv", pkt);
      }
    } else if (direction === "send") {
    }
  }
  static get_flush(buffers, seqno, ackno) {
    const totalLen = ackno - seqno;
    if (totalLen <= 0)
      return null;
    let flush_payload = Buffer.alloc(totalLen);
    let flush_mask = Buffer.alloc(totalLen);
    const newBuffers = buffers.filter((segment) => {
      if (segment.seqno > ackno)
        return true;
      if (segment.seqno < seqno) {
        if (segment.seqno + segment.payload.length < seqno)
          return false;
        segment.payload = segment.payload.subarray(seqno - segment.seqno);
        segment.seqno = seqno;
      }
      const flush_offset = segment.seqno - seqno;
      const len_to_flush = Math.min(ackno - segment.seqno, segment.payload.length);
      segment.payload.copy(flush_payload, flush_offset, 0, len_to_flush);
      flush_mask.fill(1, flush_offset, flush_offset + len_to_flush);
      if (len_to_flush < segment.payload.length) {
        segment.payload = segment.payload.subarray(len_to_flush);
        segment.seqno += len_to_flush;
        return true;
      }
      return false;
    });
    if (flush_mask.includes(0)) {
      if (buffers.length >= 50) {
        console.warn(`[meter-core/tcp_tracker] - Dropped ${totalLen} bytes`);
        return Buffer.alloc(0);
      }
      return null;
    } else {
      buffers.length = 0;
      buffers.push(...newBuffers);
      return flush_payload;
    }
  }
  handle_recv_segment(packet, ip, tcp) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (tcpDataLength > 0) {
      this.send_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength))
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "recv");
    }
  }
  handle_send_segment(packet, ip, tcp) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (tcpDataLength > 0) {
      this.recv_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength))
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "send");
    }
  }
};
function is_sack_in_header(buffer, ip, tcp) {
  if (tcp.hdrlen == 20)
    return false;
  let options_offset = ip.offset + 20;
  const options_len = tcp.hdrlen - 20;
  const end_offset = options_offset + options_len;
  while (options_offset < end_offset) {
    switch (buffer[options_offset]) {
      case 0:
        options_offset = end_offset;
        break;
      case 1:
        options_offset += 1;
        break;
      case 2:
        options_offset += 4;
        break;
      case 3:
        options_offset += 3;
        break;
      case 4:
        options_offset += 2;
        break;
      case 5:
        return true;
      case 8:
        options_offset += 10;
        break;
      case 254:
      case 255:
        options_offset += buffer[options_offset + 1] ?? 1;
        break;
      default:
        throw new Error(
          `[meter-core/tcp-tracker] - Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`
        );
    }
  }
  return false;
}
function IPnumber(IPaddress) {
  var ip = IPaddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (ip && ip.length === 5) {
    return (+ip[1] << 24) + (+ip[2] << 16) + (+ip[3] << 8) + +ip[4];
  }
  return null;
}
function isDeviceIp(ip, listen_options) {
  const testIp = IPnumber(ip), listen_ip = IPnumber(listen_options.ip), mask = IPnumber(listen_options.mask);
  if (!testIp || !listen_ip || !mask)
    return false;
  return (testIp & mask) === (listen_ip & mask);
}

// src/pkt-capture.ts
import { RawSocket } from "raw-socket-sniffer";
import { networkInterfaces } from "os";
import { execSync } from "child_process";
var { findDevice, deviceList } = cap.Cap;
var { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;
var PktCapture = class extends TypedEmitter {
  tcpTracker;
  device;
  port;
  constructor(device, listen_options) {
    super();
    this.device = device;
    this.port = listen_options.port;
    this.tcpTracker = new TCPTracker(listen_options);
    this.tcpTracker.on("session", (session) => {
      console.info(
        `[meter-core/pkt-capture] - New session ${session.src}->${session.dst} ${session.is_ignored ? "(ingored) " : ""}(Total: ${Object.keys(this.tcpTracker.sessions).length})`
      );
      session.on("payload_recv", (data) => {
        this.emit("packet", data);
      });
    });
  }
  dispatchPacket(packet) {
    const ethernet = Ethernet(packet);
    if (ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
      const ipv4 = IPV4(packet, ethernet.offset);
      if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
        const tcp = TCP(packet, ipv4.offset);
        this.tcpTracker.track_packet(packet, ipv4, tcp);
      }
    }
  }
};
var PcapCapture = class extends PktCapture {
  c;
  #buffer;
  constructor(device, listen_options) {
    super(device, listen_options);
    this.c = new cap.Cap();
    this.#buffer = Buffer.alloc(65535);
  }
  listen() {
    const linkType = this.c.open(
      this.device,
      `tcp and (src port ${this.port} or dst port ${this.port})`,
      10 * 1024 * 1024,
      this.#buffer
    );
    if (this.c.setMinBytes)
      this.c.setMinBytes(54);
    this.c.on("packet", (nbytes, truncated) => {
      if (linkType === "ETHERNET") {
        this.dispatchPacket(this.#buffer);
      } else if (linkType === "NULL" && this.device === "\\Device\\NPF_Loopback") {
        const type = this.#buffer.readUInt32LE();
        if (type !== 2)
          return;
        this.dispatchPacket(this.#buffer.subarray(4));
      }
    });
  }
  close() {
    this.c.close();
  }
};
var RawSocketCapture = class extends PktCapture {
  rs;
  constructor(ip, listen_options) {
    super(ip, listen_options);
    this.rs = new RawSocket(ip, listen_options.port);
  }
  listen() {
    this.rs.on("data", this.dispatchPacket.bind(this));
    this.rs.listen();
  }
  close() {
  }
};
var PktCaptureMode = /* @__PURE__ */ ((PktCaptureMode2) => {
  PktCaptureMode2[PktCaptureMode2["MODE_PCAP"] = 0] = "MODE_PCAP";
  PktCaptureMode2[PktCaptureMode2["MODE_RAW_SOCKET"] = 1] = "MODE_RAW_SOCKET";
  return PktCaptureMode2;
})(PktCaptureMode || {});
var PktCaptureAll = class extends TypedEmitter {
  captures;
  constructor(mode, port = 6040) {
    super();
    this.captures = /* @__PURE__ */ new Map();
    if (!adminRelauncher(mode)) {
      console.warn(
        "[meter-core/PktCaptureAll] - Couldn't restart as admin, fallback to pcap mode, consider starting as admin yourself."
      );
      mode = 0 /* MODE_PCAP */;
    }
    if (mode === 1 /* MODE_RAW_SOCKET */) {
      updateFirewall();
    }
    if (mode === 0 /* MODE_PCAP */) {
      for (const device of deviceList()) {
        for (const address of device.addresses) {
          if (address.addr && address.netmask && isIPv4(address.addr)) {
            try {
              const pcapc = new PcapCapture(device.name, {
                ip: address.addr,
                mask: address.netmask,
                port
              });
              pcapc.on("packet", (buf) => this.emit("packet", buf, device.name));
              this.captures.set(device.name, pcapc);
              pcapc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else if (mode === 1 /* MODE_RAW_SOCKET */) {
      for (const addresses of Object.values(networkInterfaces())) {
        for (const device of addresses ?? []) {
          if (isIPv4(device.address) && device.family === "IPv4" && device.internal === false && !this.captures.has(device.address)) {
            try {
              const rsc = new RawSocketCapture(device.address, {
                ip: device.address,
                mask: device.netmask,
                port
              });
              rsc.on("packet", (buf) => this.emit("packet", buf, device.address));
              this.captures.set(device.address, rsc);
              rsc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else {
    }
  }
  close() {
    for (const cap2 of this.captures.values())
      cap2.close();
  }
};
function updateFirewall() {
  const command = `netsh advfirewall firewall delete rule name="lost-ark-dev" & netsh advfirewall firewall add rule name="lost-ark-dev" dir=in action=allow program="${process.argv[0]}"`;
  execSync(command, {
    stdio: "inherit"
  });
}
function getArgList(args) {
  const filtered = args.filter((a) => a !== "");
  if (filtered.length === 0)
    return "'-relaunch'";
  return "'" + filtered.join("','") + "','-relaunch'";
}
function isAdmin() {
  try {
    execSync(`fsutil dirty query ${process.env["systemdrive"] ?? "c:"}`);
  } catch {
    return false;
  }
  return true;
}
function adminRelauncher(mode) {
  if (mode !== 1 /* MODE_RAW_SOCKET */)
    return true;
  if (process.argv.includes("-relaunch"))
    return true;
  if (isAdmin())
    return true;
  const command = `cmd /c "powershell -Command Start-Process -FilePath '${process.argv[0]}' -Verb RunAs -ArgumentList ${getArgList(process.argv.splice(1))}"`;
  try {
    execSync(command, {
      stdio: "inherit"
    });
  } catch (e) {
    console.info(`[meter-core/pkt-capture] - ${e}`);
    return false;
  }
  process.exit(0);
}
export {
  PktCaptureAll,
  PktCaptureMode,
  adminRelauncher,
  deviceList,
  findDevice
};
