// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  id: number;
  itemTint: Buffer;
  unk3_0?: number;
  slot: number;
  level: number;
  expireTime: LostArkDateTime.LostArkDateTime;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.id = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.slot = reader.u16();
  data.level = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  return data;
}
