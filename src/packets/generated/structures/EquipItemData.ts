// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  expireTime: LostArkDateTime.LostArkDateTime;
  unk2_0?: number;
  itemTint: Buffer;
  level: number;
  id: number;
  slot: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.expireTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.level = reader.u16();
  data.id = reader.u32();
  data.slot = reader.u16();
  return data;
}
