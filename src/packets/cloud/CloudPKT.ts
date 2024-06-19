import { Read } from "../stream";

export class CloudPKT<T> {
  #data: Buffer;
  #opcode: number;
  #read: (reader: Read) => T;
  constructor(data: Buffer, opcode: number, read: (reader: Read) => T) {
    this.#data = data;
    this.#opcode = opcode;
    this.#read = read;
  }
  #cached?: T;

  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(new Read(this.#data));
      } catch (e) {
        return undefined;
      }
    }
    return this.#cached;
  }
}
