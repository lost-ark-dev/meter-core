import type { Read, Write } from "../../stream";
import type { PKTInitPC } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type InitPC = {
  statPair: { statType: number; value: bigint }[];
  name: string;
  level: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  characterId: bigint;
  gearLevel: number;
  playerId: bigint;
  classId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as InitPC;
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
  data.name = reader.string(20);
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.characterId = reader.u64();
  data.gearLevel = reader.f32();
  data.playerId = reader.u64();
  data.classId = reader.u16();
  return data;
}
export function write(writer: Write, data: InitPC | PKTInitPC) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
  writer.string(data.name, 20);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.characterId);
  writer.f32(data.gearLevel);
  writer.u64(data.playerId);
  writer.u16(data.classId);
}
export const name = "InitPC";
