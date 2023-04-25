import {
  TCPTracker
} from "./chunk-Z4I4JI3R.mjs";
import "./chunk-J367NFGR.mjs";

// src/pkt-capture.ts
import cap from "cap";
import { isIPv4 } from "net";
import { TypedEmitter } from "tiny-typed-emitter";
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
