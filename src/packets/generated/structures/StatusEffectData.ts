// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectData = {
  stackCount: number;
  sourceId: bigint;
  struct_436: Buffer;
  effectInstanceId: number;
  skillLevel: number;
  value?: Buffer;
  unk8_0?: bigint;
  occurTime: LostArkDateTime.LostArkDateTime;
  totalTime: number;
  statusEffectId: number;
  endTick: bigint;
};
export function read(reader: Read) {
  const data = {} as StatusEffectData;
  data.stackCount = reader.u8();
  data.sourceId = reader.u64();
  data.struct_436 = reader.bytes(reader.u16(), 8, 7);
  data.effectInstanceId = reader.u32();
  data.skillLevel = reader.u8();
  if (reader.bool()) data.value = reader.bytes(16);
  if (reader.bool()) data.unk8_0 = reader.u64();
  data.occurTime = LostArkDateTime.read(reader);
  data.totalTime = reader.f32();
  data.statusEffectId = reader.u32();
  data.endTick = reader.u64();
  return data;
}
