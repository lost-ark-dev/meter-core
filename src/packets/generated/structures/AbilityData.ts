// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  Points: number;
  Id: number;
  Level: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.Points = reader.u16();
  data.Id = reader.u32();
  data.Level = reader.u8();
  return data;
}
