// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  Level: number;
  Id: number;
  Points: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.Level = reader.u8();
  data.Id = reader.u32();
  data.Points = reader.u16();
  return data;
}
