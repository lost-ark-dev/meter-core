// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  objectId: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk2: number;
  unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 53204;
