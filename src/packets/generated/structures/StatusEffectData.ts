// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  SkillLevel: number;
  OccurTime: LostArkDateTime.LostArkDateTime;
  StatusEffectId: number;
  SourceId: bigint;
  Unk4_0?: bigint;
  TotalTime: number;
  EndTick: bigint;
  struct_420: Buffer;
  Value?: Buffer;
  EffectInstanceId: number;
  Unk10: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.SkillLevel = reader.u8();
  data.OccurTime = LostArkDateTime.read(reader);
  data.StatusEffectId = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk4_0 = reader.u64();
  data.TotalTime = reader.u32();
  data.EndTick = reader.u64();
  data.struct_420 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool()) data.Value = reader.bytes(16);
  data.EffectInstanceId = reader.u32();
  data.Unk10 = reader.u8();
  return data;
}
