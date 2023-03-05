// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  CharacterId: bigint;
  Value: number;
  EffectInstanceId: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.CharacterId = reader.u64();
  reader.skip(1);
  data.Value = reader.u32();
  data.EffectInstanceId = reader.u32();
  reader.skip(4);
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 43648;
