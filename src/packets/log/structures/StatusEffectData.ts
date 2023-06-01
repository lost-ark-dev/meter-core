import type { Read, Write } from "../../stream";
import type { StatusEffectData } from "../../generated/structures/StatusEffectData";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type StatusEffectDataLog = {
  skillLevel: number;
  occurTime: LostArkDateTime.LostArkDateTime;
  statusEffectId: number;
  sourceId: bigint;
  totalTime: number;
  endTick: bigint;
  value?: Buffer;
  effectInstanceId: number;
  stackCount: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectDataLog;
  data.skillLevel = reader.u8();
  data.occurTime = LostArkDateTime.read(reader, version);
  data.statusEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.totalTime = reader.f32();
  data.endTick = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.effectInstanceId = reader.u32();
  if (version >= 1) {
    data.stackCount = reader.u8();
  } else {
    data.stackCount = 1;
  }
  return data;
}
export function write(writer: Write, data: StatusEffectDataLog | StatusEffectData) {
  writer.u8(data.skillLevel);
  LostArkDateTime.write(writer, data.occurTime);
  writer.u32(data.statusEffectId);
  writer.u64(data.sourceId);
  writer.f32(data.totalTime);
  writer.u64(data.endTick);
  if (writer.bool(data.value !== undefined)) {
    writer.bytes(data.value, { length: 16 });
  }
  writer.u32(data.effectInstanceId);
  writer.u8(data.stackCount);
}
