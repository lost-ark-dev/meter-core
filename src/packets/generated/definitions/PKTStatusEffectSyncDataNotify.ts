// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  effectInstanceId: number;
  characterId: bigint;
  value: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  reader.skip(2);
  data.effectInstanceId = reader.u32();
  data.characterId = reader.u64();
  data.value = reader.u32();
  reader.skip(4);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 33630;
