// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  occurTime: LostArkDateTime.LostArkDateTime;
  struct_445: Buffer;
  stackCount: number;
  effectInstanceId: number;
  statusEffectId: number;
  unk6_0?: bigint;
  skillLevel: number;
  value?: Buffer;
  sourceId: bigint;
  totalTime: number;
  endTick: bigint;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.occurTime = LostArkDateTime.read(reader);
  data.struct_445 = reader.bytes(reader.u16(), 8, 7);
  data.stackCount = reader.u8();
  data.effectInstanceId = reader.u32();
  data.statusEffectId = reader.u32();
  if (reader.bool()) data.unk6_0 = reader.u64();
  data.skillLevel = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.sourceId = reader.u64();
  data.totalTime = reader.f32();
  data.endTick = reader.u64();
  return data;
}
