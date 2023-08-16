import type { Read, Write } from "../../stream";
import type { PCStruct } from "../../generated/structures/PCStruct";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "./StatusEffectData";
import * as EquipItemData from "./EquipItemData";
export type PCStructLog = {
  maxItemLevel: number;
  statPair: { statType: number; value: bigint }[];
  name: string;
  heading: Angle.Angle;
  characterId: bigint;
  playerId: bigint;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  classId: number;
  level: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  //version 1+
  avgItemLevel: number;
  position: Vector3F.Vector3F;
  equipItemDataList: EquipItemData.EquipItemDataLog[];
  equipLifeToolDataList: EquipItemData.EquipItemDataLog[];
  guildName: string;
  guildId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as PCStructLog;
  data.maxItemLevel = reader.f32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {} as { statType: number; value: bigint };
      z.statType = reader.u8();
      z.value = ReadNBytesInt64.read(reader, version);
      return z;
    },
    152
  );
  data.name = reader.string(20);
  data.heading = Angle.read(reader, version);
  data.characterId = reader.u64();
  data.playerId = reader.u64();
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
  data.classId = reader.u16();
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  //Version 1+
  if (version >= 1) {
    data.avgItemLevel = reader.f32();
    data.position = Vector3F.read(reader);
    data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version), 32);
    data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version), 9);
    data.guildName = reader.string(20);
    if (version >= 2) {
      data.guildId = reader.u64();
    } else {
      data.guildId = BigInt(reader.u32());
    }
  } else {
    // Defaults if possible, so that we don't have to potentially handle undefined
    data.avgItemLevel = data.maxItemLevel;
    data.position = { x: 0, y: 0, z: 0 };
    data.equipItemDataList = [];
    data.equipLifeToolDataList = [];
    data.guildName = "";
    data.guildId = 0n;
  }
  return data;
}
export function write(writer: Write, data: PCStructLog | PCStruct) {
  writer.f32(data.maxItemLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
  writer.string(data.name, 20);
  Angle.write(writer, data.heading);
  writer.u64(data.characterId);
  writer.u64(data.playerId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj: { addonSkillFeatureIdList: number[]; skillId: number }) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2: number) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
  writer.u16(data.classId);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  //Version 1+
  writer.f32(data.avgItemLevel);
  Vector3F.write(writer, data.position);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
  writer.string(data.guildName, 20);
  writer.u64(data.guildId);
}
