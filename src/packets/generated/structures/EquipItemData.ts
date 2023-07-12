// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  level: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  slot: number;
  itemTint: Buffer;
  unk5_0?: number;
  id: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.level = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  data.slot = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.id = reader.u32();
  return data;
}
