// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  unk1_0?: bigint;
  unk2: bigint;
  new: boolean;
  statusEffectData: StatusEffectData.StatusEffectData;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  if (reader.bool()) data.unk1_0 = reader.u64();
  data.unk2 = reader.u64();
  data.new = reader.bool();
  data.statusEffectData = StatusEffectData.read(reader);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 16949;
