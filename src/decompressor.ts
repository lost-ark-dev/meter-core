import { uncompressSync as lz4UncompressSync } from "lz4-napi";
import oodle from "oodle";
import { uncompress as snappyUncompress } from "snappyjs";

export class Decompressor {
  oodle: oodle.Oodle;
  xorTable: Buffer;

  constructor(oodle_state: Buffer, xorTable: Buffer) {
    this.oodle = new oodle.Oodle(oodle_state);
    if (xorTable.length != 256) throw new Error("Invalid xorTable length");
    this.xorTable = xorTable;
  }

  decrypt(data: Buffer, xorShift: number, compression: number, xor: boolean) {
    if (xor) this.xor(data, xorShift);
    let out: Buffer;
    switch (compression) {
      case 0: {
        // no compression
        out = data;
        break;
      }
      case 1: {
        // lz4
        out = lz4UncompressSync(data);
        break;
      }
      case 2: {
        // snappy
        out = snappyUncompress(data);
        break;
      }
      case 3: {
        // oodle
        if (data.length < 4)
          throw new Error(`Invalid oodle packet: size=${data.length}, comp=${compression}, opcode=${xorShift}`);
        out = this.oodle.decode(data.subarray(4), data.readUInt32LE(0));
        break;
      }
      default:
        throw new Error(`Unknown compression: ${compression}`);
    }
    if (out.length < 16) throw new Error(`Invalid packet: size=${out.length}, comp=${compression}, opcode=${xorShift}`);
    return out.subarray(16);
  }

  xor(data: Buffer, seed: number) {
    for (let i = 0; i < data.length; i++) data[i] ^= this.xorTable[seed++ % 256]!;
  }
}
