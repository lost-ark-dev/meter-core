// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  id: number;
  points: number;
  level: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.id = reader.u32();
  data.points = reader.u16();
  data.level = reader.u8();
  return data;
}
