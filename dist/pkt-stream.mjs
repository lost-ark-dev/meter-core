import {
  mapping
} from "./chunk-OEA6SKV5.mjs";
import "./chunk-Q54OOCTY.mjs";
import "./chunk-NEZ5FR2C.mjs";
import "./chunk-D7LHKVM4.mjs";
import "./chunk-2S7YIPI5.mjs";

// src/pkt-stream.ts
import { TypedEmitter } from "tiny-typed-emitter";
var PKTStream = class extends TypedEmitter {
  #decompressor;
  constructor(decompressor) {
    super();
    this.#decompressor = decompressor;
  }
  read(buf) {
    try {
      if (buf.length < 6)
        return false;
      const xor = buf.readUInt8(5);
      if (xor > 2)
        return false;
      const compression = buf.readUInt8(4);
      if (compression > 3)
        return false;
      const data = buf.subarray(6);
      const opcode = buf.readUInt16LE(2);
      const pkt = mapping.get(opcode);
      if (pkt) {
        const [name, read] = pkt;
        this.emit(
          name,
          new PKT(data, opcode, compression, Boolean(xor), this.#decompressor, read)
        );
      }
      this.emit("*", data, opcode, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
};
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode, compression, xor, decompressor, read) {
    this.#data = data;
    this.#opcode = opcode;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read;
  }
  #cached;
  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${e}`);
        return void 0;
      }
    }
    return this.#cached;
  }
};
export {
  PKT,
  PKTStream
};
