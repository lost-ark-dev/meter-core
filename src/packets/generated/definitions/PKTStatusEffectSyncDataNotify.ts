// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  ObjectId: bigint;
  EffectInstanceId: number;
  CharacterId: bigint;
  Value: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  data.Value = reader.u32();
  reader.skip(5);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 2750;
