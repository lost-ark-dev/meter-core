// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  level: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  id: number;
  slot: number;
  unk5_0?: number;
  itemTint: Buffer;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.level = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  data.id = reader.u32();
  data.slot = reader.u16();
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  return data;
}
