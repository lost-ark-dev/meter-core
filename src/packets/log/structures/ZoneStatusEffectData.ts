import type { Read, Write } from "../../stream";
export type ZoneStatusEffectDataLog = {
  stackCount: number;
  target: number;
  id: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectDataLog;
  data.stackCount = reader.u8();
  data.target = reader.u8();
  data.id = reader.u32();
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectDataLog) {
  writer.u8(data.stackCount);
  writer.u8(data.target);
  writer.u32(data.id);
}
