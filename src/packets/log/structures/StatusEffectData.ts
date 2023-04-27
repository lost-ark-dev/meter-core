import type { Read, Write } from "../../stream";
import type { StatusEffectData } from "../../generated/structures/StatusEffectData";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectDataLog = {
  SkillLevel: number;
  OccurTime: LostArkDateTime.LostArkDateTime;
  StatusEffectId: number;
  SourceId: bigint;
  TotalTime: number;
  EndTick: bigint;
  Value?: Buffer;
  EffectInstanceId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectDataLog;
  data.SkillLevel = reader.u8();
  data.OccurTime = LostArkDateTime.read(reader, version);
  data.StatusEffectId = reader.u32();
  data.SourceId = reader.u64();
  data.TotalTime = reader.u32();
  data.EndTick = reader.u64();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.EffectInstanceId = reader.u32();
  return data;
}
export function write(writer: Write, data: StatusEffectDataLog | StatusEffectData) {
  writer.u8(data.SkillLevel);
  LostArkDateTime.write(writer, data.OccurTime);
  writer.u32(data.StatusEffectId);
  writer.u64(data.SourceId);
  writer.u32(data.TotalTime);
  writer.u64(data.EndTick);
  if (writer.bool(data.Value !== undefined)) {
    writer.bytes(data.Value, { length: 16 });
  }
  writer.u32(data.EffectInstanceId);
}
