// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type AbilityData = {
  id: number;
  level: number;
  points: number;
};
export function read(reader: Read) {
  const data = {} as AbilityData;
  data.id = reader.u32();
  data.level = reader.u8();
  data.points = reader.u16();
  return data;
}
