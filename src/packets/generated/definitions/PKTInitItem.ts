// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ItemData from "../structures/ItemData";
export type PKTInitItem = {
  itemDataList: ItemData.ItemData[];
  storageType: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitItem;
  data.itemDataList = reader.array(reader.u16(), () => ItemData.read(reader), 80);
  data.storageType = reader.u8();
  return data;
}
export const name = "PKTInitItem";
export const opcode = 9176;
