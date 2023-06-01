import type { Read, Write } from "../../stream";
import type { AbilityData } from "../../generated/structures/AbilityData";
export type AbilityDataLog = {
  points: number;
  id: number;
  level: number;
};
export function read(reader: Read, version: number) {
  const data = {} as AbilityDataLog;
  data.points = reader.u16();
  data.id = reader.u32();
  data.level = reader.u8();
  return data;
}
export function write(writer: Write, data: AbilityDataLog | AbilityData) {
  writer.u16(data.points);
  writer.u32(data.id);
  writer.u8(data.level);
}
