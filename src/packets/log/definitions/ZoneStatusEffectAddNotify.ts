import type { Read, Write } from "../../stream";
import type { PKTZoneStatusEffectAddNotify } from "../../generated/types";
import * as ZoneStatusEffectData from "../structures/ZoneStatusEffectData";
export type ZoneStatusEffectAddNotify = {
  zoneStatusEffectDataList: ZoneStatusEffectData.ZoneStatusEffectDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectAddNotify;
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => ZoneStatusEffectData.read(reader, version), 4);
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectAddNotify | PKTZoneStatusEffectAddNotify) {
  writer.array(
    data.zoneStatusEffectDataList,
    { maxLen: 4, lenType: "u16" },
    (obj: ZoneStatusEffectData.ZoneStatusEffectDataLog) => {
      ZoneStatusEffectData.write(writer, obj);
    }
  );
}

export const name = "ZoneStatusEffectAddNotify";
