// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  stackCount: number;
  unk2_0?: bigint;
  sourceId: bigint;
  statusEffectId: number;
  occurTime: LostArkDateTime.LostArkDateTime;
  skillLevel: number;
  value?: Buffer;
  struct_438: Buffer;
  endTick: bigint;
  effectInstanceId: number;
  totalTime: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.stackCount = reader.u8();
  if (reader.bool()) data.unk2_0 = reader.u64();
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  data.occurTime = LostArkDateTime.read(reader);
  data.skillLevel = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.struct_438 = reader.bytes(reader.u16(), 8, 7);
  data.endTick = reader.u64();
  data.effectInstanceId = reader.u32();
  data.totalTime = reader.f32();
  return data;
}
