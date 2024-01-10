// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectData;
  objectId: bigint;
  unk3_0?: bigint;
  new: boolean;
  unk5: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader);
  data.objectId = reader.u64();
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.new = reader.bool();
  data.unk5 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 9208;
