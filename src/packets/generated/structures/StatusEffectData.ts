// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  StatusEffectId: number;
  struct_425: Buffer;
  Unk2: number;
  InstanceId: bigint;
  SourceId: bigint;
  EffectInstanceId: number;
  Value?: Buffer;
  SkillLevel: number;
  Unk8_0?: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk10: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.StatusEffectId = reader.u32();
  data.struct_425 = reader.bytes(reader.u16(), 8, 7);
  data.Unk2 = reader.u32();
  data.InstanceId = reader.u64();
  data.SourceId = reader.u64();
  data.EffectInstanceId = reader.u32();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.Unk8_0 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk10 = reader.u8();
  return data;
}
