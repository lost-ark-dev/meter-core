// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  endTick: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  value?: Buffer;
  unk5_0?: bigint;
  effectInstanceId: number;
  stackCount: number;
  skillLevel: number;
  struct_454: Buffer;
  sourceId: bigint;
  totalTime: number;
  statusEffectId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.endTick = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.value = reader.bytes(16);
  if (reader.bool()) data.unk5_0 = reader.u64();
  data.effectInstanceId = reader.u32();
  data.stackCount = reader.u8();
  data.skillLevel = reader.u8();
  data.struct_454 = reader.bytes(reader.u16(), 8, 7);
  data.sourceId = reader.u64();
  data.totalTime = reader.f32();
  data.statusEffectId = reader.u32();
  return data;
}
