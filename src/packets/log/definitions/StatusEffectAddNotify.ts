import type { Read, Write } from "../../stream";
import type { PKTStatusEffectAddNotify } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
export type StatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectDataLog;
  ObjectId: bigint;
  New: boolean;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader, version);
  data.ObjectId = reader.u64();
  data.New = reader.bool();
  return data;
}
export function write(writer: Write, data: StatusEffectAddNotify | PKTStatusEffectAddNotify) {
  StatusEffectData.write(writer, data.statusEffectData);
  writer.u64(data.ObjectId);
  writer.bool(data.New);
}

export const logId = 34;
export const name = "StatusEffectAddNotify";
