// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  id: number;
  slot: number;
  itemTint: Buffer;
  unk4_0?: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  level: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.id = reader.u32();
  data.slot = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.expireTime = LostArkDateTime.read(reader);
  data.level = reader.u16();
  return data;
}
