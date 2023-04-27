import type { Read, Write } from "../../stream";
import type { NpcData } from "../../generated/structures/NpcData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "./StatusEffectData";
export type NpcDataLog = {
  SpawnIndex: number;
  ObjectId: bigint;
  TransitIndex?: number;
  Position: Vector3F.Vector3F;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  DirectionYaw: Angle.Angle;
  statPair: { StatType: number; Value: bigint }[];
  TypeId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as NpcDataLog;
  data.SpawnIndex = reader.u32();
  data.ObjectId = reader.u64();
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.Position = Vector3F.read(reader, version);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.DirectionYaw = Angle.read(reader, version);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {} as any;
      x.StatType = reader.u8();
      x.Value = ReadNBytesInt64.read(reader, version);
      return x;
    },
    152
  );
  data.TypeId = reader.u32();
  return data;
}
export function write(writer: Write, data: NpcDataLog | NpcData) {
  writer.u32(data.SpawnIndex);
  writer.u64(data.ObjectId);
  if (writer.bool(data.TransitIndex !== undefined)) writer.u32(data.TransitIndex);
  Vector3F.write(writer, data.Position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  Angle.write(writer, data.DirectionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { StatType: number; Value: bigint }) => {
    writer.u8(obj.StatType);
    ReadNBytesInt64.write(writer, obj.Value);
  });
  writer.u32(data.TypeId);
}
