// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  stackCount: number;
  value?: Buffer;
  skillLevel: number;
  sourceId: bigint;
  effectInstanceId: number;
  struct_442: Buffer;
  statusEffectId: number;
  unk9_0?: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  endTick: bigint;
  totalTime: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.stackCount = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.struct_442 = reader.bytes(reader.u16(), 8, 7);
  data.statusEffectId = reader.u32();
  if (reader.bool()) data.unk9_0 = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  data.endTick = reader.u64();
  data.totalTime = reader.f32();
  return data;
}
