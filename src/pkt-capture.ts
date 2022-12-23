import { TypedEmitter } from "tiny-typed-emitter";
import cap from "cap";
import { isIPv4 } from "net";

const { findDevice, deviceList } = cap.Cap;
const { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;

export { findDevice, deviceList };

interface PktCaptureEvents {
  packet: (buf: Buffer) => void;
}

export class PktCapture extends TypedEmitter<PktCaptureEvents> {
  c: cap.Cap;
  device: string;

  constructor(device: string) {
    super();
    this.device = device;
    this.c = new cap.Cap();
    const buffer = Buffer.alloc(65535);
    const linkType = this.c.open(device, "tcp and src port 6040", 10 * 1024 * 1024, buffer);
    const packetBuffer = new PacketBuffer();

    if (this.c.setMinBytes) this.c.setMinBytes(0);

    this.c.on("packet", () => {
      if (linkType === "ETHERNET") {
        let ret: any = Ethernet(buffer);
        if (ret.info.type === PROTOCOL.ETHERNET.IPV4) {
          ret = IPV4(buffer, ret.offset);
          if (ret.info.protocol === PROTOCOL.IP.TCP) {
            let datalen = ret.info.totallen - ret.hdrlen;
            ret = TCP(buffer, ret.offset);
            datalen -= ret.hdrlen;
            if (datalen) {
              packetBuffer.write(Buffer.from(buffer.subarray(ret.offset, ret.offset + datalen)));
              let pkt = packetBuffer.read();
              while (pkt) {
                this.emit("packet", pkt);
                pkt = packetBuffer.read();
              }
            }
          }
        }
      }
    });
  }

  close() {
    try {
      this.c.close();
    } catch (e) {}
  }
}

interface PktCaptureAllEvents {
  packet: (buf: Buffer, device: string) => void;
}

export class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
  caps: Map<string, PktCapture>;

  constructor() {
    super();
    this.caps = new Map();
    for (const device of deviceList()) {
      for (const address of device.addresses) {
        if (isIPv4(address.addr!)) {
          let cap;
          try {
            cap = new PktCapture(device.name);
          } catch (e) {
            console.error(`[meter-core/PktCaptureAll] ${e}`);
            cap?.close();
            continue;
          }

          // re-emit
          cap.on("packet", (buf) => this.emit("packet", buf, device.name));

          // close others
          /* cap.once("packet", () => {
            for (const [name, cap] of this.caps.entries()) {
              if (name != device.name) cap.close();
            }
          }); */

          this.caps.set(device.name, cap);
        }
      }
    }
  }

  close() {
    for (const cap of this.caps.values()) cap.close();
  }
}

class PacketBuffer {
  buffer: Buffer | null;
  position: number;
  out: Buffer[];

  constructor() {
    this.buffer = null;
    this.position = 0;
    this.out = [];
  }

  write(data: Buffer) {
    // we'll chop off the front of `data` with each loop
    while (data.length > 0) {
      // if we have a buffer prepared, we should append to it first
      if (this.buffer) {
        // if our buffer size is less than 2, we'll need to compute the full size
        if (this.buffer.length < 2) {
          const old = this.buffer[0]!; // save old byte
          const size = (data[0]! << 8) + old!; // convert from little-endian
          this.buffer = Buffer.alloc(size); // make new buffer
          this.buffer[0] = old; // write old value
          this.position = 1; // update position
        }

        // write as many bytes as we can
        const remaining = Math.min(data.length, this.buffer.length - this.position);
        data.copy(this.buffer, this.position, 0, remaining);
        this.position += remaining;

        // if we filled the buffer, push it
        if (this.position === this.buffer.length) {
          this.out.push(this.buffer);
          this.buffer = null;
          this.position = 0;
        }

        // chop off the front and keep going
        data = data.subarray(remaining);
        continue;
      }

      // if it's too small to read the size value, just save it in the buffer and
      // we'll hopefully get to it the next time around
      if (data.length < 2) {
        this.buffer = Buffer.from(data);
        this.position = data.length;
        break;
      }

      // otherwise, read the size value, and if it's bigger than the size of the
      // data we have, we should save it in the buffer
      const size = data.readUInt16LE(0);
      if (size > data.length) {
        // Ignore fragmented packets -> will lead to data loss probably, but fix crashes
        // this.buffer = Buffer.alloc(size);
        // data.copy(this.buffer);
        // this.position = data.length;
        break;
      }

      // otherwise, just push it and chop off the front, then keep going
      this.out.push(data.subarray(0, size));
      data = data.subarray(size);
    }
  }

  read() {
    return this.out.shift();
  }
}
