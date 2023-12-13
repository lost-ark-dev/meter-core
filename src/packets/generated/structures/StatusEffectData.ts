// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  unk1_0?: bigint;
  endTick: bigint;
  stackCount: number;
  struct_437: Buffer;
  sourceId: bigint;
  value?: Buffer;
  totalTime: number;
  occurTime: LostArkDateTime.LostArkDateTime;
  effectInstanceId: number;
  skillLevel: number;
  statusEffectId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  if (reader.bool()) data.unk1_0 = reader.u64();
  data.endTick = reader.u64();
  data.stackCount = reader.u8();
  data.struct_437 = reader.bytes(reader.u16(), 8, 7);
  data.sourceId = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.totalTime = reader.f32();
  data.occurTime = LostArkDateTime.read(reader);
  data.effectInstanceId = reader.u32();
  data.skillLevel = reader.u8();
  data.statusEffectId = reader.u32();
  return data;
}
