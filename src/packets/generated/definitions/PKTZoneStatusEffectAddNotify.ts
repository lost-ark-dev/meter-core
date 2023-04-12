// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ZoneStatusEffectData from "../structures/ZoneStatusEffectData";
export type PKTZoneStatusEffectAddNotify = {
  zoneStatusEffectDataList: ZoneStatusEffectData.ZoneStatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneStatusEffectAddNotify;
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => ZoneStatusEffectData.read(reader), 4);
  return data;
}
export const name = "PKTZoneStatusEffectAddNotify";
export const opcode = 49467;
