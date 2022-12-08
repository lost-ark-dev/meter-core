export class Read {
  /** Buffer */
  b: Buffer;
  /** Offset */
  o: number;

  constructor(buf: Buffer) {
    this.b = buf;
    this.o = 0;
  }

  skip(length = 0) {
    this.o += length;
  }

  bool() {
    return this.u8() === 1;
  }

  u8() {
    return this.b.readUint8(this.o++);
  }

  i8() {
    return this.b.readInt8(this.o++);
  }

  u16() {
    const value = this.b.readUint16LE(this.o);
    this.o += 2;
    return value;
  }

  i16() {
    const value = this.b.readInt16LE(this.o);
    this.o += 2;
    return value;
  }

  u32() {
    const value = this.b.readUint32LE(this.o);
    this.o += 4;
    return value;
  }

  i32() {
    const value = this.b.readInt32LE(this.o);
    this.o += 4;
    return value;
  }

  f32() {
    const value = this.b.readFloatLE(this.o);
    this.o += 4;
    return value;
  }

  u64() {
    const value = this.b.readBigUint64LE(this.o);
    this.o += 8;
    return value;
  }

  i64() {
    const value = this.b.readBigInt64LE(this.o);
    this.o += 8;
    return value;
  }

  string(maxLength: number) {
    let length = this.u16();
    if (length <= maxLength) {
      length = length * 2;
      const value = this.b.toString("utf16le", this.o, this.o + length);
      this.o += length;
      return value;
    }
    return "";
  }

  bytes(length = 0, maxLength?: number, multiplier?: number) {
    if (maxLength && length > maxLength) return Buffer.alloc(0);
    if (multiplier) length = length * multiplier;
    const value = Buffer.from(this.b.subarray(this.o, this.o + length));
    this.o += length;
    return value;
  }

  array(length: number, callbackfn: (...args: any[]) => any, maxLength?: number) {
    if (maxLength && length > maxLength) return [];
    return new Array(length).fill(undefined).map(callbackfn);
  }
}
