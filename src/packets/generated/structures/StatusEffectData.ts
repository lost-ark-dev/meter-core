// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  value?: Buffer;
  occurTime: LostArkDateTime.LostArkDateTime;
  effectInstanceId: number;
  totalTime: number;
  struct_445: Buffer;
  endTick: bigint;
  stackCount: number;
  unk9_0?: bigint;
  skillLevel: number;
  sourceId: bigint;
  statusEffectId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  if (reader.bool()) data.value = reader.bytes(16);
  data.occurTime = LostArkDateTime.read(reader);
  data.effectInstanceId = reader.u32();
  data.totalTime = reader.f32();
  data.struct_445 = reader.bytes(reader.u16(), 8, 7);
  data.endTick = reader.u64();
  data.stackCount = reader.u8();
  if (reader.bool()) data.unk9_0 = reader.u64();
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  return data;
}
