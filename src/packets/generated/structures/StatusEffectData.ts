// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  endTick: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  statusEffectId: number;
  skillLevel: number;
  struct_437: Buffer;
  value?: Buffer;
  sourceId: bigint;
  effectInstanceId: number;
  unk10_0?: bigint;
  stackCount: number;
  totalTime: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.endTick = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  data.statusEffectId = reader.u32();
  data.skillLevel = reader.u8();
  data.struct_437 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool()) data.value = reader.bytes(16);
  data.sourceId = reader.u64();
  data.effectInstanceId = reader.u32();
  if (reader.bool()) data.unk10_0 = reader.u64();
  data.stackCount = reader.u8();
  data.totalTime = reader.f32();
  return data;
}
