// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  sourceId: bigint;
  statusEffectId: number;
  totalTime: number;
  effectInstanceId: number;
  endTick: bigint;
  struct_443: Buffer;
  unk7_0?: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  skillLevel: number;
  value?: Buffer;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  data.totalTime = reader.f32();
  data.effectInstanceId = reader.u32();
  data.endTick = reader.u64();
  data.struct_443 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool()) data.unk7_0 = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  data.skillLevel = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  data.stackCount = reader.u8();
  return data;
}
