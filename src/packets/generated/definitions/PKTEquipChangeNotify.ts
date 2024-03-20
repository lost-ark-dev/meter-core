// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  objectId: bigint;
  unk1: number;
  unk2: number;
  equipItemDataList: EquipItemData.EquipItemData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.objectId = reader.u64();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 47337;
