// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  unk1_0?: number;
  level: number;
  itemTint: Buffer;
  unk4: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  slot: number;
  id: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk4 = reader.u8();
  data.expireTime = LostArkDateTime.read(reader);
  data.slot = reader.u16();
  data.id = reader.u32();
  return data;
}
