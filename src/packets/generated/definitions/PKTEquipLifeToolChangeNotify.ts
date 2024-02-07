// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipLifeToolChangeNotify = {
  objectId: bigint;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipLifeToolChangeNotify;
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  return data;
}
export const name = "PKTEquipLifeToolChangeNotify";
export const opcode = 15165;
