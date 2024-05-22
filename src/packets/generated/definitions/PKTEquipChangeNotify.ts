// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  equipItemDataList: EquipItemData.EquipItemData[];
  unk1: number;
  unk3_0?: bigint;
  unk4: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk1 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.unk4 = reader.u32();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 30942;
