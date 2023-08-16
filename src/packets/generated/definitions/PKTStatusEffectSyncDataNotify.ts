// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  characterId: bigint;
  objectId: bigint;
  value: number;
  effectInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  reader.skip(1);
  data.characterId = reader.u64();
  data.objectId = reader.u64();
  data.value = reader.u32();
  reader.skip(4);
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 19864;
