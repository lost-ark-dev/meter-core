// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  unk1_0?: number;
  id: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  itemTint: Buffer;
  unk5: number;
  level: number;
  slot: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.id = reader.u32();
  data.expireTime = LostArkDateTime.read(reader);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk5 = reader.u8();
  data.level = reader.u16();
  data.slot = reader.u16();
  return data;
}
