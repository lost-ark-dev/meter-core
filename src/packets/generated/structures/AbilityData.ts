// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  points: number;
  id: number;
  level: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.points = reader.u16();
  data.id = reader.u32();
  data.level = reader.u8();
  return data;
}
