// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  level: number;
  id: number;
  unk3_0?: number;
  itemTint: Buffer;
  expireTime: LostArkDateTime.LostArkDateTime;
  slot: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.level = reader.u16();
  data.id = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.expireTime = LostArkDateTime.read(reader);
  data.slot = reader.u16();
  return data;
}
