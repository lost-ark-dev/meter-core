// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  totalTime: number;
  sourceId: bigint;
  stackCount: number;
  value?: Buffer;
  statusEffectId: number;
  struct_447: Buffer;
  occurTime: LostArkDateTime.LostArkDateTime;
  unk9_0?: bigint;
  skillLevel: number;
  endTick: bigint;
  effectInstanceId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.totalTime = reader.f32();
  data.sourceId = reader.u64();
  data.stackCount = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.statusEffectId = reader.u32();
  data.struct_447 = reader.bytes(reader.u16(), 8, 7);
  data.occurTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.unk9_0 = reader.u64();
  data.skillLevel = reader.u8();
  data.endTick = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
