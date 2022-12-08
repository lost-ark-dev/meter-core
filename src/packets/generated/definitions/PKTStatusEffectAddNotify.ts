// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  ObjectId: bigint;
  Unk1_0?: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
  Unk3: bigint;
  New: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.ObjectId = reader.u64();
  if (reader.bool()) data.Unk1_0 = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  data.Unk3 = reader.u64();
  data.New = reader.bool();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 4713;
