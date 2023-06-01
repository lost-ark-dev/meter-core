// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  new: boolean;
  unk1: bigint;
  unk3_0?: bigint;
  objectId: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.new = reader.bool();
  data.unk1 = reader.u64();
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.objectId = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 29231;
