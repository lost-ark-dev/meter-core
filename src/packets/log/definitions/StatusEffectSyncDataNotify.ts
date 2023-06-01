import type { Read, Write } from "../../stream";
import type { PKTStatusEffectSyncDataNotify } from "../../generated/types";
export type StatusEffectSyncDataNotify = {
  objectId: bigint;
  effectInstanceId: number;
  characterId: bigint;
  value: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectSyncDataNotify;
  data.objectId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.characterId = reader.u64();
  data.value = reader.u32();
  return data;
}
export function write(writer: Write, data: StatusEffectSyncDataNotify | PKTStatusEffectSyncDataNotify) {
  writer.u64(data.objectId);
  writer.u32(data.effectInstanceId);
  writer.u64(data.characterId);
  writer.u32(data.value);
}

export const name = "StatusEffectSyncDataNotify";
