// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  unk0: bigint;
  unk2_0?: bigint;
  new: boolean;
  objectId: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.unk0 = reader.u64();
  if (reader.bool()) data.unk2_0 = reader.u64();
  data.new = reader.bool();
  data.objectId = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 43258;
