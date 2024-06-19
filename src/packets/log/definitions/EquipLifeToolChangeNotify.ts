import type { Read, Write } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type EquipLifeToolChangeNotify = {
  objectId: bigint;
  equipLifeToolDataList: EquipItemData.EquipItemDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as EquipLifeToolChangeNotify;
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader, version));
  return data;
}
export function write(writer: Write, data: EquipLifeToolChangeNotify) {
  writer.u64(data.objectId);
  writer.array(data.equipLifeToolDataList, { lenType: "u16" }, (obj: EquipItemData.EquipItemDataLog) => {
    EquipItemData.write(writer, obj);
  });
}

export const name = "EquipLifeToolChangeNotify";
