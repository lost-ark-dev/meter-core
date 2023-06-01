import type { Read, Write } from "../../stream";
import type { NpcData } from "../../generated/structures/NpcData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "./StatusEffectData";
export type NpcDataLog = {
  spawnIndex: number;
  objectId: bigint;
  transitIndex?: number;
  position: Vector3F.Vector3F;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  directionYaw: Angle.Angle;
  statPair: { statType: number; value: bigint }[];
  typeId: number;
  level: number;
  balanceLevel?: number;
};
export function read(reader: Read, version: number) {
  const data = {} as NpcDataLog;
  data.spawnIndex = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.position = Vector3F.read(reader, version);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.directionYaw = Angle.read(reader, version);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {} as { statType: number; value: bigint };
      x.statType = reader.u8();
      x.value = ReadNBytesInt64.read(reader, version);
      return x;
    },
    152
  );
  data.typeId = reader.u32();

  if (version >= 1) {
    data.level = reader.u16();
    if (reader.bool()) data.balanceLevel = reader.u16();
  } else {
    data.level = 0;
  }
  return data;
}
export function write(writer: Write, data: NpcDataLog | NpcData) {
  writer.u32(data.spawnIndex);
  writer.u64(data.objectId);
  if (writer.bool(data.transitIndex !== undefined)) writer.u32(data.transitIndex);
  Vector3F.write(writer, data.position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  Angle.write(writer, data.directionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
  writer.u32(data.typeId);
  writer.u16(data.level);
  if (writer.bool(data.balanceLevel !== undefined)) writer.u16(data.balanceLevel);
}
