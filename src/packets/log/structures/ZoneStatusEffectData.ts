import type { Read, Write } from "../../stream";
import type { ZoneStatusEffectData } from "../../generated/structures/ZoneStatusEffectData";
export type ZoneStatusEffectDataLog = {
  StackCount: number;
  Target: number;
  Id: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectDataLog;
  data.StackCount = reader.u8();
  data.Target = reader.u8();
  data.Id = reader.u32();
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectDataLog | ZoneStatusEffectData) {
  writer.u8(data.StackCount);
  writer.u8(data.Target);
  writer.u32(data.Id);
}
