// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  characterId: bigint;
  objectId: bigint;
  effectInstanceId: number;
  value: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.characterId = reader.u64();
  reader.skip(2);
  data.objectId = reader.u64();
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  data.value = reader.u32();
  reader.skip(4);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 18697;
