// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  objectId: bigint;
  new: boolean;
  unk3_0?: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
  unk5: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.objectId = reader.u64();
  data.new = reader.bool();
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  data.unk5 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 2816;
