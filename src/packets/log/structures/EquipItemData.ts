import type { Read, Write } from "../../stream";
import type { EquipItemData } from "../../generated/structures/EquipItemData";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemDataLog = {
  slot: number;
  level: number;
  itemTint: Buffer;
  expireTime: LostArkDateTime.LostArkDateTime;
  id: number;
};
export function read(reader: Read, version: number) {
  const data = {} as EquipItemDataLog;
  data.slot = reader.u16();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.expireTime = LostArkDateTime.read(reader);
  data.id = reader.u32();
  return data;
}
export function write(writer: Write, data: EquipItemDataLog | EquipItemData) {
  writer.u16(data.slot);
  writer.u16(data.level);
  writer.bytes(data.itemTint, { maxLen: 5, lenType: "u16", multiplier: 14 });
  LostArkDateTime.write(writer, data.expireTime);
  writer.u32(data.id);
}
