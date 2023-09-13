// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectData;
  unk1: bigint;
  new: boolean;
  objectId: bigint;
  unk5_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader);
  data.unk1 = reader.u64();
  data.new = reader.bool();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk5_0 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 40461;
