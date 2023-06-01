// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  objectId: bigint;
  value: number;
  effectInstanceId: number;
  characterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.objectId = reader.u64();
  data.value = reader.u32();
  reader.skip(6);
  data.effectInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 39153;
