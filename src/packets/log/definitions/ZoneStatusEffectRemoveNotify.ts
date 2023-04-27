import type { Read, Write } from "../../stream";
import type { PKTZoneStatusEffectRemoveNotify } from "../../generated/types";
export type ZoneStatusEffectRemoveNotify = {
  StatusEffectId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectRemoveNotify;
  data.StatusEffectId = reader.u32();
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectRemoveNotify | PKTZoneStatusEffectRemoveNotify) {
  writer.u32(data.StatusEffectId);
}

export const logId = 45;
export const name = "ZoneStatusEffectRemoveNotify";
