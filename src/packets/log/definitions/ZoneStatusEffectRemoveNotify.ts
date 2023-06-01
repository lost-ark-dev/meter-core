import type { Read, Write } from "../../stream";
import type { PKTZoneStatusEffectRemoveNotify } from "../../generated/types";
export type ZoneStatusEffectRemoveNotify = {
  statusEffectId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectRemoveNotify;
  data.statusEffectId = reader.u32();
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectRemoveNotify | PKTZoneStatusEffectRemoveNotify) {
  writer.u32(data.statusEffectId);
}

export const name = "ZoneStatusEffectRemoveNotify";
