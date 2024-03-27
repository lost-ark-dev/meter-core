// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  occurTime: LostArkDateTime.LostArkDateTime;
  totalTime: number;
  struct_446: Buffer;
  stackCount: number;
  effectInstanceId: number;
  value?: Buffer;
  skillLevel: number;
  sourceId: bigint;
  endTick: bigint;
  unk11_0?: bigint;
  statusEffectId: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.occurTime = LostArkDateTime.read(reader);
  data.totalTime = reader.f32();
  data.struct_446 = reader.bytes(reader.u16(), 8, 7);
  data.stackCount = reader.u8();
  data.effectInstanceId = reader.u32();
  if (reader.bool()) data.value = reader.bytes(16);
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.endTick = reader.u64();
  if (reader.bool()) data.unk11_0 = reader.u64();
  data.statusEffectId = reader.u32();
  return data;
}
