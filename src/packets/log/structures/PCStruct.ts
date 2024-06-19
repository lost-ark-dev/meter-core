import type { Read, Write } from "../../stream";
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
  data.statPair = reader.array(reader.u16(), () => {
    const z = {} as { statType: number; value: bigint };
    z.statType = reader.u8();
    z.value = ReadNBytesInt64.read(reader, version);
    return z;
  });
  data.name = reader.string();
  data.heading = Angle.read(reader, version);
  data.characterId = reader.u64();
  data.playerId = reader.u64();
  data.addonSkillFeatureList = reader.array(reader.u16(), () => {
    const C = {} as any;
    C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32());
    C.skillId = reader.u32();
    return C;
  });
  data.classId = reader.u16();
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version));
  //Version 1+
  if (version >= 1) {
    data.avgItemLevel = reader.f32();
    data.position = Vector3F.read(reader);
    data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version));
    data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version));
    data.guildName = reader.string();
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
export function write(writer: Write, data: PCStructLog) {
  writer.f32(data.maxItemLevel);
  writer.array(data.statPair, { lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
  writer.string(data.name);
  Angle.write(writer, data.heading);
  writer.u64(data.characterId);
  writer.u64(data.playerId);
  writer.array(
    data.addonSkillFeatureList,
    { lenType: "u16" },
    (obj: { addonSkillFeatureIdList: number[]; skillId: number }) => {
      writer.array(obj.addonSkillFeatureIdList, { lenType: "u16" }, (obj2: number) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
  writer.u16(data.classId);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  //Version 1+
  writer.f32(data.avgItemLevel);
  Vector3F.write(writer, data.position);
  writer.array(data.equipItemDataList, { lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
  writer.array(data.equipLifeToolDataList, { lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
  writer.string(data.guildName);
  writer.u64(data.guildId);
}
