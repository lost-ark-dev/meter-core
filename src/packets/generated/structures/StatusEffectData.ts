// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  effectInstanceId: number;
  value?: Buffer;
  totalTime: number;
  sourceId: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  unk7_0?: bigint;
  endTick: bigint;
  struct_442: Buffer;
  statusEffectId: number;
  skillLevel: number;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.effectInstanceId = reader.u32();
  if (reader.bool()) data.value = reader.bytes(16);
  data.totalTime = reader.f32();
  data.sourceId = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.unk7_0 = reader.u64();
  data.endTick = reader.u64();
  data.struct_442 = reader.bytes(reader.u16(), 8, 7);
  data.statusEffectId = reader.u32();
  data.skillLevel = reader.u8();
  data.stackCount = reader.u8();
  return data;
}
