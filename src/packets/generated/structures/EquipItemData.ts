// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  slot: number;
  level: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  id: number;
  itemTint: Buffer;
  unk6_0?: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.slot = reader.u16();
  data.level = reader.u16();
  data.expireTime = LostArkDateTime.read(reader);
  data.id = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.unk6_0 = reader.u8();
  return data;
}
