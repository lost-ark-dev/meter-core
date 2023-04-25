import type { Read, Write } from "../../stream";
import type { PCStruct } from "../../generated/structures/PCStruct";
import * as LostArkDateTime from "../../common/LostArkDateTime";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "./StatusEffectData";
export type PCLogStruct = {
  GearLevel: number;
  statPair: { StatType: number; Value: bigint }[];
  Name: string;
  Heading: Angle.Angle;
  CharacterId: bigint;
  PlayerId: bigint;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  ClassId: number;
  Level: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as PCLogStruct;
  data.GearLevel = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {} as any;
      z.StatType = reader.u8();
      z.Value = ReadNBytesInt64.read(reader, version);
      return z;
    },
    152
  );
  data.Name = reader.string(20);
  data.Heading = Angle.read(reader, version);
  data.CharacterId = reader.u64();
  data.PlayerId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const C = {} as any;
      C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      C.SkillId = reader.u32();
      return C;
    },
    200
  );
  data.ClassId = reader.u16();
  data.Level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  return data;
}
export function write(writer: Write, data: PCLogStruct | PCStruct) {
  writer.u32(data.GearLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { StatType: number; Value: bigint }) => {
    writer.u8(obj.StatType);
    ReadNBytesInt64.write(writer, obj.Value);
  });
  writer.string(data.Name, 20);
  Angle.write(writer, data.Heading);
  writer.u64(data.CharacterId);
  writer.u64(data.PlayerId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj: { addonSkillFeatureIdList: number[]; SkillId: number }) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2: number) => {
        writer.u32(obj2);
      });
      writer.u32(obj.SkillId);
    }
  );
  writer.u16(data.ClassId);
  writer.u16(data.Level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
}
