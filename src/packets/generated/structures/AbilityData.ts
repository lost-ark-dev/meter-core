// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  level: number;
  points: number;
  id: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.level = reader.u8();
  data.points = reader.u16();
  data.id = reader.u32();
  return data;
}
