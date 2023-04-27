import type { Read, Write } from "../../stream";
import type { AbilityData } from "../../generated/structures/AbilityData";
export type AbilityDataLog = {
  Points: number;
  Id: number;
  Level: number;
};
export function read(reader: Read, version: number) {
  const data = {} as AbilityDataLog;
  data.Points = reader.u16();
  data.Id = reader.u32();
  data.Level = reader.u8();
  return data;
}
export function write(writer: Write, data: AbilityDataLog | AbilityData) {
  writer.u16(data.Points);
  writer.u32(data.Id);
  writer.u8(data.Level);
}
