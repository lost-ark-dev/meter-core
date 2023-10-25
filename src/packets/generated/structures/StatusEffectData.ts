// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  occurTime: LostArkDateTime.LostArkDateTime;
  statusEffectId: number;
  struct_436: Buffer;
  sourceId: bigint;
  value?: Buffer;
  stackCount: number;
  effectInstanceId: number;
  endTick: bigint;
  unk10_0?: bigint;
  skillLevel: number;
  totalTime: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.occurTime = LostArkDateTime.read(reader);
  data.statusEffectId = reader.u32();
  data.struct_436 = reader.bytes(reader.u16(), 8, 7);
  data.sourceId = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.stackCount = reader.u8();
  data.effectInstanceId = reader.u32();
  data.endTick = reader.u64();
  if (reader.bool()) data.unk10_0 = reader.u64();
  data.skillLevel = reader.u8();
  data.totalTime = reader.f32();
  return data;
}
