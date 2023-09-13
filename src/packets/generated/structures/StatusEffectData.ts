// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  skillLevel: number;
  sourceId: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  stackCount: number;
  value?: Buffer;
  struct_437: Buffer;
  effectInstanceId: number;
  totalTime: number;
  statusEffectId: number;
  endTick: bigint;
  unk12_0?: bigint;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  data.stackCount = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.struct_437 = reader.bytes(reader.u16(), 8, 7);
  data.effectInstanceId = reader.u32();
  data.totalTime = reader.f32();
  data.statusEffectId = reader.u32();
  data.endTick = reader.u64();
  if (reader.bool()) data.unk12_0 = reader.u64();
  return data;
}
