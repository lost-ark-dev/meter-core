// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ItemData from "../structures/ItemData";
export type PKTInitItem = {
  storageType: number;
  itemDataList: ItemData.ItemData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitItem;
  data.storageType = reader.u8();
  data.itemDataList = reader.array(reader.u16(), () => ItemData.read(reader), 80);
  return data;
}
export const name = "PKTInitItem";
export const opcode = 55719;
