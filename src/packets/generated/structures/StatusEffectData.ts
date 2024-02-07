// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  stackCount: number;
  skillLevel: number;
  totalTime: number;
  endTick: bigint;
  struct_441: Buffer;
  effectInstanceId: number;
  occurTime: LostArkDateTime.LostArkDateTime;
  unk8_0?: bigint;
  sourceId: bigint;
  value?: Buffer;
  statusEffectId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.stackCount = reader.u8();
  data.skillLevel = reader.u8();
  data.totalTime = reader.f32();
  data.endTick = reader.u64();
  data.struct_441 = reader.bytes(reader.u16(), 8, 7);
  data.effectInstanceId = reader.u32();
  data.occurTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.unk8_0 = reader.u64();
  data.sourceId = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.statusEffectId = reader.u32();
  return data;
}
