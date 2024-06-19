import type { Read, Write } from "../../stream";
import * as ZoneStatusEffectData from "../structures/ZoneStatusEffectData";
export type ZoneStatusEffectAddNotify = {
  zoneStatusEffectDataList: ZoneStatusEffectData.ZoneStatusEffectDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneStatusEffectAddNotify;
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => ZoneStatusEffectData.read(reader, version));
  return data;
}
export function write(writer: Write, data: ZoneStatusEffectAddNotify) {
  writer.array(
    data.zoneStatusEffectDataList,
    { lenType: "u16" },
    (obj: ZoneStatusEffectData.ZoneStatusEffectDataLog) => {
      ZoneStatusEffectData.write(writer, obj);
    }
  );
}

export const name = "ZoneStatusEffectAddNotify";
