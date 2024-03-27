// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  id: number;
  level: number;
  unk2: number;
  itemTint: Buffer;
  slot: number;
  unk6_0?: number;
  expireTime: LostArkDateTime.LostArkDateTime;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  data.id = reader.u32();
  data.level = reader.u16();
  data.unk2 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.slot = reader.u16();
  if (reader.bool()) data.unk6_0 = reader.u8();
  data.expireTime = LostArkDateTime.read(reader);
  return data;
}
