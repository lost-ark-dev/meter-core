// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  New: boolean;
  Unk1: bigint;
  Unk2_0?: bigint;
  ObjectId: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.New = reader.bool();
  data.Unk1 = reader.u64();
  if (reader.bool()) data.Unk2_0 = reader.u64();
  data.ObjectId = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 29231;
