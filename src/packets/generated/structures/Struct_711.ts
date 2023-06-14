// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_711 = {
  unk0: number;
  unk1: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  lookData: Buffer;
  unk4: bigint;
  unk5: number;
  unk6: number;
  lostArkString: string;
};
export function read(reader: Read) {
  const data = {} as Struct_711;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.unk6 = reader.u16();
  data.lostArkString = reader.string(20);
  return data;
}
