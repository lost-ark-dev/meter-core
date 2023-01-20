// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectSyncDataNotify = {
  EffectInstanceId: number;
  ObjectId: bigint;
  CharacterId: bigint;
  Value: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectSyncDataNotify;
  data.EffectInstanceId = reader.u32();
  reader.skip(4);
  data.ObjectId = reader.u64();
  data.CharacterId = reader.u64();
  reader.skip(1);
  data.Value = reader.u32();
  return data;
}
export const name = "PKTStatusEffectSyncDataNotify";
export const opcode = 17356;
