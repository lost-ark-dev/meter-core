// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  StatusEffectId: number;
  EffectInstanceId: number;
  SourceId: bigint;
  InstanceId: bigint;
  Unk4: number;
  stack: number;
  Unk6_0?: bigint;
  Value?: Buffer;
  struct_419: Buffer;
  SkillLevel: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.StatusEffectId = reader.u32();
  data.EffectInstanceId = reader.u32();
  data.SourceId = reader.u64();
  data.InstanceId = reader.u64();
  data.Unk4 = reader.u32();
  data.stack = reader.u8();
  if (reader.bool()) data.Unk6_0 = reader.u64();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.struct_419 = reader.bytes(reader.u16(), 8, 7);
  data.SkillLevel = reader.u8();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  return data;
}
