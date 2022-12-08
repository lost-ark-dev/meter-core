import { TypedEmitter } from "tiny-typed-emitter";
import type { Decompressor } from "./decompressor";
import { mapping } from "./packets/generated/mapping";
import type { PKTStreamEvents } from "./packets/generated/PKTStreamEvents";

export class PKTStream extends TypedEmitter<PKTStreamEvents> {
  #decompressor: Decompressor;

  constructor(decompressor: Decompressor) {
    super();
    this.#decompressor = decompressor;
  }

  read(buf: Buffer) {
    try {
      const opcode = buf.readUInt16LE(2);

      const pkt = mapping.get(opcode);
      if (pkt) {
        const [name, read] = pkt;
        this.emit(name as keyof PKTStreamEvents, new PKT(buf, this.#decompressor, read));
      } else this.emit("*", buf.subarray(6), opcode, buf.readUInt8(4), buf.readUInt8(5));
    } catch (e) {
      console.log(e);
    }
  }
}

export class PKT<T> {
  #data: Buffer;
  #decompressor: Decompressor;
  #read: (buf: Buffer) => T;

  constructor(data: Buffer, decompressor: Decompressor, read: (buf: Buffer) => T) {
    this.#data = data;
    this.#decompressor = decompressor;
    this.#read = read;
  }

  // in case we listen for it more than once
  #cached?: T;

  get parsed() {
    if (!this.#cached)
      this.#cached = this.#read(
        this.#decompressor.decrypt(
          this.#data.subarray(6),
          this.#data.readUInt16LE(2),
          this.#data.readUInt8(4),
          this.#data.readUInt8(5)
        )
      );
    return this.#cached;
  }
}
