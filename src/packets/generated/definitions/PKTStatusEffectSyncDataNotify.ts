// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  objectId: bigint;
  characterId: bigint;
  effectInstanceId: number;
  value: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.objectId = reader.u64();
  reader.skip(1);
  data.characterId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.value = reader.u32();
  reader.skip(4);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 46448;
