// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  ObjectId: bigint;
  Value: number;
  EffectInstanceId: number;
  CharacterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.ObjectId = reader.u64();
  data.Value = reader.u32();
  reader.skip(6);
  data.EffectInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 39153;
