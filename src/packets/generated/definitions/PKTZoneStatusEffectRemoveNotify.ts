// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneStatusEffectRemoveNotify = {
  statusEffectId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneStatusEffectRemoveNotify;
  reader.skip(1);
  data.statusEffectId = reader.u32();
  reader.skip(2);
  return data;
}
export const name = "PKTZoneStatusEffectRemoveNotify";
export const opcode = 57795;
