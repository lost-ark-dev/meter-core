import { uncompressSync as lz4UncompressSync } from "lz4-napi";
import oodle from "oodle";
import { uncompress as snappyUncompress } from "snappyjs";

export class Decompressor {
  oodle: oodle.Oodle;
  xorTable: Buffer;
  logerror: (message: any, ...optionalParams: any[]) => void;

  constructor(oodle_state: Buffer, xorTable: Buffer, logerror: (message: any, ...optionalParams: any[]) => void) {
    this.oodle = new oodle.Oodle(oodle_state);
    if (xorTable.length != 256) throw new Error("Invalid xorTable length");
    this.xorTable = xorTable;
    this.logerror = logerror;
  }

  decrypt(data: Buffer, xorShift: number, compression: number, xor: boolean) {
    if (xor) this.xor(data, xorShift);
    switch (compression) {
      case 0: {
        // no compression
        return data.subarray(16);
      }
      case 1: {
        // lz4
        return lz4UncompressSync(data).subarray(16);
      }
      case 2: {
        // snappy
        return snappyUncompress(data).subarray(16);
      }
      case 3: {
        // oodle
        const length = data.readUInt32LE(0);
        const out = Buffer.alloc(length);
        data = this.oodle.decode(data.subarray(4), out);
        return data.subarray(16);
      }
      default:
        throw new Error(`Unknown compression: ${compression}`);
    }
  }

  xor(data: Buffer, seed: number) {
    for (let i = 0; i < data.length; i++) data[i] ^= this.xorTable[seed++ % 256]!;
  }
}
