import { TypedEmitter } from "tiny-typed-emitter";
import type { Decompressor } from "./decompressor";
import { LogStreamEvent } from "./packets/log/LogStreamEvent";

interface PKTStreamEvent {
  "*": (data: Buffer, opcode: number, compression: number, xor: boolean) => void;
}
export class PKTStream extends TypedEmitter<PKTStreamEvent> {
  #decompressor: Decompressor;

  constructor(decompressor: Decompressor) {
    super();
    this.#decompressor = decompressor;
  }

  /**
   * @returns `false` if packet is malformed
   */
  read(buf: Buffer): false | void {
    try {
      if (buf.length < 8) return false;
      const xor = buf.readUInt8(7);
      if (xor > 2) return false;
      const compression = buf.readUInt8(6);
      if (compression > 3) return false;
      const data = buf.subarray(8);
      const opcode = buf.readUInt16LE(4);

      this.emit("*", data, opcode, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
}

export class PKT<T> {
  #data: Buffer;
  #opcode: number;
  #compression: number;
  #xor: boolean;
  #decompressor: Decompressor;
  #read: (buf: Buffer) => T;

  constructor(
    data: Buffer,
    opcode: number,
    compression: number,
    xor: boolean,
    decompressor: Decompressor,
    read: (buf: Buffer) => T
  ) {
    this.#data = data;
    this.#opcode = opcode;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read;
  }

  // in case we listen for it more than once
  #cached?: T;

  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${e}`);
        return undefined;
      }
    }
    return this.#cached;
  }
}
