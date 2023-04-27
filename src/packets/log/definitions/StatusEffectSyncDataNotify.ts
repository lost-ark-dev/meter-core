import type { Read, Write } from "../../stream";
import type { PKTStatusEffectSyncDataNotify } from "../../generated/types";
export type StatusEffectSyncDataNotify = {
  ObjectId: bigint;
  EffectInstanceId: number;
  CharacterId: bigint;
  Value: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectSyncDataNotify;
  data.ObjectId = reader.u64();
  data.EffectInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  data.Value = reader.u32();
  return data;
}
export function write(writer: Write, data: StatusEffectSyncDataNotify | PKTStatusEffectSyncDataNotify) {
  writer.u64(data.ObjectId);
  writer.u32(data.EffectInstanceId);
  writer.u64(data.CharacterId);
  writer.u32(data.Value);
}

export const logId = 37;
export const name = "StatusEffectSyncDataNotify";
