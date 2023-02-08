// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  Points: number;
  Level: number;
  Id: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.Points = reader.u16();
  data.Level = reader.u8();
  data.Id = reader.u32();
  return data;
}
