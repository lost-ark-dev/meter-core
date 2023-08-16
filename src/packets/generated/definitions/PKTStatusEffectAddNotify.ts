// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  objectId: bigint;
  unk1: bigint;
  unk3_0?: bigint;
  new: boolean;
  statusEffectData: StatusEffectData.StatusEffectData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.objectId = reader.u64();
  data.unk1 = reader.u64();
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.new = reader.bool();
  data.statusEffectData = StatusEffectData.read(reader);
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 40870;
