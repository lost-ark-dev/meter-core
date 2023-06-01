// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_709 = {
  lostArkString: string;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  lookData: Buffer;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_709;
  data.lostArkString = reader.string(20);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u16();
  data.unk4 = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk7 = reader.u8();
  return data;
}
