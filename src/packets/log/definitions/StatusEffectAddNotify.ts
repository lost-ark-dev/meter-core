import type { Read, Write } from "../../stream";
import type { PKTStatusEffectAddNotify } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
export type StatusEffectAddNotify = {
  statusEffectData: StatusEffectData.StatusEffectDataLog;
  objectId: bigint;
  new: boolean;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectAddNotify;
  data.statusEffectData = StatusEffectData.read(reader, version);
  data.objectId = reader.u64();
  data.new = reader.bool();
  return data;
}
export function write(writer: Write, data: StatusEffectAddNotify | PKTStatusEffectAddNotify) {
  StatusEffectData.write(writer, data.statusEffectData);
  writer.u64(data.objectId);
  writer.bool(data.new);
}

export const name = "StatusEffectAddNotify";
