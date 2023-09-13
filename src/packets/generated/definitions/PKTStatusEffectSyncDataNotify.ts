// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  value: number;
  characterId: bigint;
  objectId: bigint;
  effectInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  reader.skip(2);
  data.value = reader.u32();
  reader.skip(4);
  data.characterId = reader.u64();
  reader.skip(1);
  data.objectId = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 56789;
