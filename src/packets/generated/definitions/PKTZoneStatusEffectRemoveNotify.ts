// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneStatusEffectRemoveNotify = {
  statusEffectId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneStatusEffectRemoveNotify;
  reader.skip(2);
  data.statusEffectId = reader.u32();
  return data;
}
export const name = "PKTZoneStatusEffectRemoveNotify";
export const opcode = 37714;
