// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  slot: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  level: number;
  unk4_0?: number;
  itemTint: Buffer;
  id: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.slot = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  data.level = reader.u16();
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.id = reader.u32();
  return data;
}
