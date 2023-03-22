// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTStatusEffectAddNotify = {
  Unk0_0?: bigint;
  New: boolean;
  ObjectId: bigint;
  Unk3: bigint;
  statusEffectData: StatusEffectData.StatusEffectData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectAddNotify;
  if (reader.bool()) data.Unk0_0 = reader.u64();
  data.New = reader.bool();
  data.ObjectId = reader.u64();
  data.Unk3 = reader.u64();
  data.statusEffectData = StatusEffectData.read(reader);
  return data;
}
export const name = "PKTStatusEffectAddNotify";
export const opcode = 5430;
