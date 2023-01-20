// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  New: boolean;
  ObjectId: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
  Unk3: bigint;
  Unk4_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.New = reader.bool();
  data.ObjectId = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  data.Unk3 = reader.u64();
  if (reader.bool()) data.Unk4_0 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 35476;
