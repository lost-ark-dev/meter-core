// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  OccurTime: LostArkDateTime.LostArkDateTime;
  struct_430: Buffer;
  Unk2: number;
  EffectInstanceId: number;
  StatusEffectId: number;
  Unk5_0?: bigint;
  SkillLevel: number;
  Value?: Buffer;
  SourceId: bigint;
  TotalTime: number;
  EndTick: bigint;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.OccurTime = LostArkDateTime.read(reader);
  data.struct_430 = reader.bytes(reader.u16(), 8, 7);
  data.Unk2 = reader.u8();
  data.EffectInstanceId = reader.u32();
  data.StatusEffectId = reader.u32();
  if (reader.bool()) data.Unk5_0 = reader.u64();
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.SourceId = reader.u64();
  data.TotalTime = reader.u32();
  data.EndTick = reader.u64();
  return data;
}
