import type { Read, Write } from "../../stream";
export type ActiveAbilityLog = {
  featureType: number;
  level: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ActiveAbilityLog;
  data.featureType = reader.u16();
  data.level = reader.u32();
  return data;
}
export function write(writer: Write, data: ActiveAbilityLog) {
  writer.u16(data.featureType);
  writer.u32(data.level);
}
