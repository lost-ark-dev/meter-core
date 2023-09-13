// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  unk1_0?: number;
  id: number;
  slot: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  level: number;
  itemTint: Buffer;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.id = reader.u32();
  data.slot = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  return data;
}
