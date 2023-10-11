// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  unk1_0?: bigint;
  totalTime: number;
  value?: Buffer;
  endTick: bigint;
  statusEffectId: number;
  struct_437: Buffer;
  skillLevel: number;
  sourceId: bigint;
  effectInstanceId: number;
  occurTime: LostArkDateTime.LostArkDateTime;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  if (reader.bool()) data.unk1_0 = reader.u64();
  data.totalTime = reader.f32();
  if (reader.bool()) data.value = reader.bytes(16);
  data.endTick = reader.u64();
  data.statusEffectId = reader.u32();
  data.struct_437 = reader.bytes(reader.u16(), 8, 7);
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.occurTime = LostArkDateTime.read(reader);
  data.stackCount = reader.u8();
  return data;
}
