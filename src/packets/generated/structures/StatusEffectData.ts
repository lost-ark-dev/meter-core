// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  SourceId: bigint;
  Unk1: number;
  Unk2: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  SkillLevel: number;
  StatusEffectId: number;
  struct_420: Buffer;
  InstanceId: bigint;
  Value?: Buffer;
  Unk9_0?: bigint;
  EffectInstanceId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.SourceId = reader.u64();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u8();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.SkillLevel = reader.u8();
  data.StatusEffectId = reader.u32();
  data.struct_420 = reader.bytes(reader.u16(), 8, 7);
  data.InstanceId = reader.u64();
  if (reader.bool()) data.Value = reader.bytes(16);
  if (reader.bool()) data.Unk9_0 = reader.u64();
  data.EffectInstanceId = reader.u32();
  return data;
}
