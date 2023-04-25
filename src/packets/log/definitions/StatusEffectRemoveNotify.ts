import type { Read, Write } from "../../stream";
import type { PKTStatusEffectRemoveNotify } from "../../generated/types";
export type StatusEffectRemoveNotify = {
  statusEffectIds: number[];
  ObjectId: bigint;
  Reason: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  return data;
}
export function write(writer: Write, data: StatusEffectRemoveNotify | PKTStatusEffectRemoveNotify) {
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u64(data.ObjectId);
  writer.u8(data.Reason);
}

export const logId = 35;
export const name = "StatusEffectRemoveNotify";
