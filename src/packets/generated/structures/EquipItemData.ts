// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  expireTime: LostArkDateTime.LostArkDateTime;
  unk2_0?: number;
  slot: number;
  itemTint: Buffer;
  id: number;
  level: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.expireTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.slot = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.id = reader.u32();
  data.level = reader.u16();
  return data;
}
