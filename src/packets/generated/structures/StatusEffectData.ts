// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  skillLevel: number;
  struct_435: Buffer;
  effectInstanceId: number;
  value?: Buffer;
  occurTime: LostArkDateTime.LostArkDateTime;
  sourceId: bigint;
  endTick: bigint;
  unk9_0?: bigint;
  totalTime: number;
  statusEffectId: number;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.skillLevel = reader.u8();
  data.struct_435 = reader.bytes(reader.u16(), 8, 7);
  data.effectInstanceId = reader.u32();
  if (reader.bool()) data.value = reader.bytes(16);
  data.occurTime = LostArkDateTime.read(reader);
  data.sourceId = reader.u64();
  data.endTick = reader.u64();
  if (reader.bool()) data.unk9_0 = reader.u64();
  data.totalTime = reader.f32();
  data.statusEffectId = reader.u32();
  data.stackCount = reader.u8();
  return data;
}
