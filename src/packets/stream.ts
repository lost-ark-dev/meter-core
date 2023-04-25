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

export class Write {
  /** Buffer */
  b: Buffer;
  /** Offset */
  o: number;

  constructor(max = 0xffff) {
    this.b = Buffer.allocUnsafe(max);
    this.o = 0;
  }

  get value() {
    return this.b.subarray(0, this.o);
  }

  skip(length = 0) {
    this.o += length;
  }

  bool(value: boolean = false) {
    this.u8(value ? 1 : 0);
    return value; //Used for cleaner writers
  }

  u8(value = 0) {
    this.b.writeUInt8(value, this.o++);
  }

  i8(value = 0) {
    this.b.writeInt8(value, this.o++);
  }

  u16(value = 0) {
    this.o = this.b.writeUInt16LE(value, this.o);
  }

  i16(value = 0) {
    this.o = this.b.writeInt16LE(value, this.o);
  }

  u32(value = 0) {
    this.o = this.b.writeUInt32LE(value, this.o);
  }

  i32(value = 0) {
    this.o = this.b.writeInt32LE(value, this.o);
  }

  f32(value = 0) {
    this.o = this.b.writeFloatLE(value, this.o);
  }

  u64(value = 0n) {
    this.o = this.b.writeBigUInt64LE(BigInt(value), this.o);
  }

  i64(value = 0n) {
    this.o = this.b.writeBigInt64LE(BigInt(value), this.o);
  }

  string(value = "", maxLength = 0) {
    this.u16(value.length);
    if (value.length <= maxLength) this.o += this.b.write(value, this.o, "utf16le");
  }

  /**
   * @param opts.length Used when Buffer should be fixed length -> no header
   * @param opts.maxLen Used when Buffer has a max number of chunk -> chunk count is written as header
   * @param opts.lenType Required if maxLen, Used to specify header size possible values: ["u8", "u16", "u32"]
   * @param opts.multiplier Default: 1, Used to specify chunk size, Buffer size should be a multiple of multiplier, defaults to 1
   * @param opts If empty, fallback to opts.length = Buffer.length
   */
  bytes(
    value = Buffer.alloc(0),
    opts: {
      length?: number;
      maxLen?: number;
      lenType?: "u8" | "u16" | "u32";
      multiplier?: number;
    } = {}
  ) {
    if (opts.maxLen) {
      const chunkSize = opts.multiplier ?? 1;
      if (value.length % chunkSize)
        throw new Error(
          `Error writing bytes, chunkSize should be a multiple of intut value size, got ${value.length}%${chunkSize}`
        );
      const count = value.length / chunkSize;
      if (count > opts.maxLen)
        throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${count} > ${opts.maxLen}`);
      if (!opts.lenType)
        throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${opts.lenType}`);

      this[opts.lenType](count);
    } else if (opts.length && value.length !== opts.length) {
      throw new Error(
        `Error writing bytes, input value size doesn't match opts.length, ${value.length} !== ${opts.lenType}`
      );
    }
    this.o += value.copy(this.b, this.o);

    // TODO: minLength value for fixed length?
    // TODO: check if this is working
    /* if (lenType) this[lenType](value.length);
      if (maxLength && value.length > maxLength) return;
      if (maxLength && value.length < maxLength) value = Buffer.concat([value, Buffer.alloc(maxLength - value.length)]);
      this.offset += value.copy(this.buf, this.offset); */
  }

  /**
   *
   * @param opts.maxLen Max size of array, size is set to 0 if overflow
   * @param opts.lenTypeUsed to specify header size possible values: ["u8", "u16", "u32"]
   */
  array(
    value: any[] = [],
    opts: { maxLen: number; lenType: "u8" | "u16" | "u32" },
    callbackfn: (...args: any[]) => any
  ) {
    if (value === undefined || value.length > opts.maxLen) {
      this[opts.lenType](0);
      return;
    }
    this[opts.lenType](value.length);
    value.forEach(callbackfn);
  }
}
