// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  struct_441: Buffer;
  endTick: bigint;
  statusEffectId: number;
  unk4_0?: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  value?: Buffer;
  effectInstanceId: number;
  stackCount: number;
  totalTime: number;
  sourceId: bigint;
  skillLevel: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.struct_441 = reader.bytes(reader.u16(), 8, 7);
  data.endTick = reader.u64();
  data.statusEffectId = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.value = reader.bytes(16);
  data.effectInstanceId = reader.u32();
  data.stackCount = reader.u8();
  data.totalTime = reader.f32();
  data.sourceId = reader.u64();
  data.skillLevel = reader.u8();
  return data;
}
