import type { Read, Write } from "../stream";

export type TripodIndex = {
  first: number;
  second: number;
  third: number;
};

export function read(reader: Read, version: number = 0): TripodIndex {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8(),
  };
}

export function write(writer: Write, data: TripodIndex) {
  writer.u8(data.first);
  writer.u8(data.second);
  writer.u8(data.third);
}
