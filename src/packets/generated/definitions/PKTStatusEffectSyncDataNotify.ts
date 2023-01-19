// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  Value: number;
  EffectInstanceId: number;
  ObjectId: bigint;
  CharacterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.Value = reader.u32();
  data.EffectInstanceId = reader.u32();
  reader.skip(5);
  data.ObjectId = reader.u64();
  data.CharacterId = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 10266;
