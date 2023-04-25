export function u32tof32(v: number) {
  //TODO: remove when we fixed float types in the dump
  const buf = Buffer.alloc(4);
  buf.writeUInt32LE(v);
  return Math.round(buf.readFloatLE() * 100) / 100;
}
