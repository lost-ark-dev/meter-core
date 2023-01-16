// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  Id: number;
  Points: number;
  Level: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.Id = reader.u32();
  data.Points = reader.u16();
  data.Level = reader.u8();
  return data;
}
