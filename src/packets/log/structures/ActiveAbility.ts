import type { Read, Write } from "../../stream";
import type { ActiveAbility } from "../../generated/structures/ActiveAbility";
export type ActiveAbilityLog = {
  FeatureType: number;
  Level: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ActiveAbilityLog;
  data.FeatureType = reader.u16();
  data.Level = reader.u32();
  return data;
}
export function write(writer: Write, data: ActiveAbilityLog | ActiveAbility) {
  writer.u16(data.FeatureType);
  writer.u32(data.Level);
}
