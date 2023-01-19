import type { Read } from "../stream";

export type TripodLevel = {
  first: number;
  second: number;
  third: number;
};

export function read(reader: Read): TripodLevel {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16(),
  };
}
