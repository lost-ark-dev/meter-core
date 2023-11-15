// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  objectId: bigint;
  unk1: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
  unk4_0?: bigint;
  new: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.objectId = reader.u64();
  data.unk1 = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  if (reader.bool()) data.unk4_0 = reader.u64();
  data.new = reader.bool();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 28820;
