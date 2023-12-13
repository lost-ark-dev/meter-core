// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  new: boolean;
  unk2_0?: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
  unk4: bigint;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  data.new = reader.bool();
  if (reader.bool()) data.unk2_0 = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  data.unk4 = reader.u64();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 14366;
