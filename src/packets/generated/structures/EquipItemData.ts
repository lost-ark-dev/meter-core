// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  expireTime: LostArkDateTime.LostArkDateTime;
  slot: number;
  itemTint: Buffer;
  level: number;
  id: number;
  unk6_0?: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.expireTime = LostArkDateTime.read(reader);
  data.slot = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.level = reader.u16();
  data.id = reader.u32();
  if (reader.bool()) data.unk6_0 = reader.u8();
  return data;
}
