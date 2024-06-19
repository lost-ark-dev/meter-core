import type { Read, Write } from "../../stream";
export type StatusEffectRemoveNotify = {
  statusEffectIds: number[];
  objectId: bigint;
  reason: number;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32());
  data.objectId = reader.u64();
  data.reason = reader.u8();
  return data;
}
export function write(writer: Write, data: StatusEffectRemoveNotify) {
  writer.array(data.statusEffectIds, { lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u64(data.objectId);
  writer.u8(data.reason);
}

export const name = "StatusEffectRemoveNotify";
