import type { Read } from "../stream";

export type TripodIndex = {
  first: number;
  second: number;
  third: number;
};

export function read(reader: Read): TripodIndex {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8(),
  };
}
