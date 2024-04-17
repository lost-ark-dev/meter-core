// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  level: number;
  id: number;
  points: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.level = reader.u8();
  data.id = reader.u32();
  data.points = reader.u16();
  return data;
}
