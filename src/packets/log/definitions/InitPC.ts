import type { Read, Write } from "../../stream";
import type { PKTInitPC } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type InitPC = {
  statPair: { StatType: number; Value: bigint }[];
  Name: string;
  Level: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  CharacterId: bigint;
  GearLevel: number;
  PlayerId: bigint;
  ClassId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PKTInitPC;
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {} as any;
      h.StatType = reader.u8();
      h.Value = ReadNBytesInt64.read(reader, version);
      return h;
    },
    152
  );
  data.Name = reader.string(20);
  data.Level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.CharacterId = reader.u64();
  data.GearLevel = reader.u32();
  data.PlayerId = reader.u64();
  data.ClassId = reader.u16();
  return data;
}
export function write(writer: Write, data: InitPC | PKTInitPC) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u8" }, (obj: { StatType: number; Value: bigint }) => {
    writer.u8(obj.StatType);
    ReadNBytesInt64.write(writer, obj.Value);
  });
  writer.string(data.Name, 20);
  writer.u16(data.Level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.CharacterId);
  writer.u32(data.GearLevel);
  writer.u64(data.PlayerId);
  writer.u16(data.ClassId);
}
export const logId = 9;
export const name = "InitPC";
