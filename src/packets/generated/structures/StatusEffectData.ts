// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  Unk0_0?: bigint;
  SkillLevel: number;
  Value?: Buffer;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  StatusEffectId: number;
  struct_423: Buffer;
  EffectInstanceId: number;
  SourceId: bigint;
  Unk8: number;
  Unk9: number;
  InstanceId: bigint;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  if (reader.bool()) data.Unk0_0 = reader.u64();
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.StatusEffectId = reader.u32();
  data.struct_423 = reader.bytes(reader.u16(), 8, 7);
  data.EffectInstanceId = reader.u32();
  data.SourceId = reader.u64();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u8();
  data.InstanceId = reader.u64();
  return data;
}
