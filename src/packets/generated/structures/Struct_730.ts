// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_730 = {
  lostArkString: string;
  unk1: number;
  lookData: Buffer;
  unk3: bigint;
  unk4: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk6: number;
  unk7: bigint;
  unk8: number;
};
export function read(reader: Read) {
  const data = {} as Struct_730;
  data.lostArkString = reader.string(20);
  data.unk1 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  data.unk8 = reader.u16();
  return data;
}
