// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  InstanceId: bigint;
  Unk2: number;
  SourceId: bigint;
  struct_418: Buffer;
  Unk5_0?: bigint;
  Value?: Buffer;
  Unk7: number;
  StatusEffectId: number;
  EffectInstanceId: number;
  SkillLevel: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.InstanceId = reader.u64();
  data.Unk2 = reader.u8();
  data.SourceId = reader.u64();
  data.struct_418 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool()) data.Unk5_0 = reader.u64();
  if (reader.bool()) data.Value = reader.bytes(16);
  data.Unk7 = reader.u32();
  data.StatusEffectId = reader.u32();
  data.EffectInstanceId = reader.u32();
  data.SkillLevel = reader.u8();
  return data;
}
