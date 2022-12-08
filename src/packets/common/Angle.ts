import type { Read } from "../stream";

export type Angle = number;

//TODO: for now we convert to radians, be we should maybe handle differently (with a class and extended operations ?)
export function read(reader: Read): Angle {
  return (reader.u16() * (2 * Math.PI)) / 0x10000;
}
