import type { Read, Write } from "../../stream";
import * as ItemData from "../structures/ItemData";
import { itemstoragetype } from "../../generated/enums";
export type InitItem = {
  itemDataList: ItemData.ItemDataLog[];
  storageType: number;
};
export function read(reader: Read, version: number) {
  const data = {} as InitItem;
  data.itemDataList = reader.array(reader.u16(), () => ItemData.read(reader, version));
  data.storageType = reader.u8();
  return data;
}
export function write(writer: Write, data: InitItem) {
  writer.array(
    [itemstoragetype.equip, itemstoragetype.account_equip].includes(data.storageType) ? data.itemDataList : [], // We only log StorageType.Equip because we don't want to fill log files with full player inventory & stash
    { lenType: "u16" },
    (obj: ItemData.ItemDataLog) => {
      ItemData.write(writer, obj);
    }
  );
  writer.u8(data.storageType);
}

export const name = "InitItem";
