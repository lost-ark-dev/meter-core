// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectData;
  ObjectId: bigint;
  New: boolean;
  Unk3: bigint;
  Unk4_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader);
  data.ObjectId = reader.u64();
  data.New = reader.bool();
  data.Unk3 = reader.u64();
  if (reader.bool()) data.Unk4_0 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 56830;
