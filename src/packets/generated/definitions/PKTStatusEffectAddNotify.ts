// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  Unk0: bigint;
  Unk1_0?: bigint;
  New: boolean;
  statusEffectData: StatusEffectData.StatusEffectData;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.Unk0 = reader.u64();
  if (reader.bool()) data.Unk1_0 = reader.u64();
  data.New = reader.bool();
  data.statusEffectData = StatusEffectData.read(reader);
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 23393;
