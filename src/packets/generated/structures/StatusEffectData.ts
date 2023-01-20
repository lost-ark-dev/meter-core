// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  SourceId: bigint;
  StatusEffectId: number;
  Value?: Buffer;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_420: Buffer;
  InstanceId: bigint;
  EffectInstanceId: number;
  Unk7: number;
  Unk8: number;
  Unk9_0?: bigint;
  SkillLevel: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.SourceId = reader.u64();
  data.StatusEffectId = reader.u32();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_420 = reader.bytes(reader.u16(), 8, 7);
  data.InstanceId = reader.u64();
  data.EffectInstanceId = reader.u32();
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u32();
  if (reader.bool()) data.Unk9_0 = reader.u64();
  data.SkillLevel = reader.u8();
  return data;
}
