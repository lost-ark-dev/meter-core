// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  characterId: bigint;
  effectInstanceId: number;
  objectId: bigint;
  value: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  reader.skip(1);
  data.characterId = reader.u64();
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  data.value = reader.u32();
  reader.skip(5);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 2306;
