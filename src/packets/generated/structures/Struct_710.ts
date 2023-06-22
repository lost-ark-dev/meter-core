// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_710 = {
  lookData: Buffer;
  unk1: number;
  lostArkString: string;
  unk3: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_710;
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk1 = reader.u8();
  data.lostArkString = reader.string(20);
  data.unk3 = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk5 = reader.u8();
  data.unk6 = reader.u16();
  data.unk7 = reader.u8();
  return data;
}
