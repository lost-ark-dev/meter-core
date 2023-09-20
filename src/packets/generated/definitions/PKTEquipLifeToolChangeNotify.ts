// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipLifeToolChangeNotify = {
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipLifeToolChangeNotify;
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTEquipLifeToolChangeNotify";
export const opcode = 59139;
