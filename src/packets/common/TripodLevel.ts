import type { Read, Write } from "../stream";

export type TripodLevel = {
  first: number;
  second: number;
  third: number;
};

export function read(reader: Read, version: number = 0): TripodLevel {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16(),
  };
}
export function write(writer: Write, data: TripodLevel) {
  writer.u16(data.first);
  writer.u16(data.second);
  writer.u16(data.third);
}
