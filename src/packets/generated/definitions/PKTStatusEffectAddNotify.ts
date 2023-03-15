// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectData;
  ObjectId: bigint;
  Unk2_0?: bigint;
  Unk3: bigint;
  New: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader);
  data.ObjectId = reader.u64();
  if (reader.bool()) data.Unk2_0 = reader.u64();
  data.Unk3 = reader.u64();
  data.New = reader.bool();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 22838;
