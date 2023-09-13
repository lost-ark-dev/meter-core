// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_714 = {
  lostArkString: string;
  unk1: bigint;
  lookData: Buffer;
  unk3: number;
  unk4: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_714;
  data.lostArkString = reader.string(20);
  data.unk1 = reader.u64();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk6 = reader.u16();
  data.unk7 = reader.u8();
  return data;
}
