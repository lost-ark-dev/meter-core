// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  equipItemDataList: EquipItemData.EquipItemData[];
  objectId: bigint;
  unk2: number;
  unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.objectId = reader.u64();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 46264;
