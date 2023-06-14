// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  unk1_0?: bigint;
  value?: Buffer;
  occurTime: LostArkDateTime.LostArkDateTime;
  struct_441: Buffer;
  skillLevel: number;
  stackCount: number;
  effectInstanceId: number;
  statusEffectId: number;
  sourceId: bigint;
  endTick: bigint;
  totalTime: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  if (reader.bool()) data.unk1_0 = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.occurTime = LostArkDateTime.read(reader);
  data.struct_441 = reader.bytes(reader.u16(), 8, 7);
  data.skillLevel = reader.u8();
  data.stackCount = reader.u8();
  data.effectInstanceId = reader.u32();
  data.statusEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.endTick = reader.u64();
  data.totalTime = reader.f32();
  return data;
}
