import type { Read, Write } from "../../stream";
import type { PKTEquipChangeNotify } from "../../generated/types";
import * as EquipItemData from "../structures/EquipItemData";
export type EquipChangeNotify = {
  objectId: bigint;
  equipItemDataList: EquipItemData.EquipItemDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as EquipChangeNotify;
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version), 32);
  return data;
}
export function write(writer: Write, data: EquipChangeNotify | PKTEquipChangeNotify) {
  writer.u64(data.objectId);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
}

export const name = "EquipChangeNotify";
