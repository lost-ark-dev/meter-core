import type { Read, Write } from "../stream";

export type Angle = number;

//TODO: for now we convert to radians, be we should maybe handle differently (with a class and extended operations ?)
export function read(reader: Read, version: number = 0): Angle {
  return (reader.u16() * (2 * Math.PI)) / 0x10000;
}
export function write(writer: Write, data: Angle = 0) {
  writer.u16(Math.round((data * 0x10000) / (2 * Math.PI)) % 0x10000);
}
