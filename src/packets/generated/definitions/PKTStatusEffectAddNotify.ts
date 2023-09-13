// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  new: boolean;
  statusEffectData: StatusEffectData.StatusEffectData;
  unk2: bigint;
  objectId: bigint;
  unk5_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.new = reader.bool();
  data.statusEffectData = StatusEffectData.read(reader);
  data.unk2 = reader.u64();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk5_0 = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 51702;
