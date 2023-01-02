import cap from "cap";
import { isIPv4 } from "net";
import { TypedEmitter } from "tiny-typed-emitter";
import { TCPTracker, TCPSession, ListenOptions } from "./tcp_tracker";

const { findDevice, deviceList } = cap.Cap;
const { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;

export { findDevice, deviceList };

interface PktCaptureEvents {
  packet: (buf: Buffer) => void;
}

export class PktCapture extends TypedEmitter<PktCaptureEvents> {
  c: cap.Cap;
  #buffer: Buffer;
  constructor(device: string, listen_options: ListenOptions) {
    super();
    this.c = new cap.Cap();
    this.#buffer = Buffer.alloc(65535);
    const linkType = this.c.open(
      device,
      `tcp and (src port ${listen_options.port} or dst port ${listen_options.port})`,
      10 * 1024 * 1024,
      this.#buffer
    );
    const tcpTracker = new TCPTracker(listen_options);
    if (this.c.setMinBytes) this.c.setMinBytes(54); // pkt header size

    this.c.on("packet", (nbytes: number, truncated: boolean) => {
      if (linkType === "ETHERNET") {
        const ethernet = Ethernet(this.#buffer);
        if (ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
          const ipv4 = IPV4(this.#buffer, ethernet.offset);
          if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
            const tcp = TCP(this.#buffer, ipv4.offset);
            tcpTracker.track_packet(this.#buffer, ipv4, tcp);
          }
        }
      }
    });
    tcpTracker.on("session", (session: TCPSession) => {
      console.info(
        `[meter-core/pkt-capture] - New session ${session.src}->${session.dst} ${
          session.is_ignored ? "(ingored) " : ""
        }(Total: ${Object.keys(tcpTracker.sessions).length})`
      );
      session.on("payload_recv", (data: Buffer) => {
        this.emit("packet", data);
      });
    });
  }

  close() {
    this.c.close();
  }
}

interface PktCaptureAllEvents {
  packet: (buf: Buffer, deviceName: string) => void;
}

export class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
  caps: Map<string, PktCapture>;

  constructor() {
    super();
    this.caps = new Map();
    for (const device of deviceList()) {
      for (const address of device.addresses) {
        if (address.addr && address.netmask && isIPv4(address.addr)) {
          try {
            const cap = new PktCapture(device.name, {
              ip: address.addr,
              mask: address.netmask,
              port: 6040,
            });

            // re-emit
            cap.on("packet", (buf) => this.emit("packet", buf, device.name));

            // close others
            /* cap.once("packet", () => {
              for (const [name, cap] of this.caps.entries()) {
                if (name != device.name) cap.close();
              }
            }); */

            this.caps.set(device.name, cap);
            break; //We only want to listen on 1 address of the interface
          } catch (e) {
            console.error(`[meter-core/PktCaptureAll] ${e}`);
          }
        }
      }
    }
  }

  close() {
    for (const cap of this.caps.values()) cap.close();
  }
}
