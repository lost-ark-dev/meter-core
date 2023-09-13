// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_713 = {
  equipItemDataList: EquipItemData.EquipItemData[];
  unk1: bigint;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  lookData: Buffer;
  lostArkString: string;
};
export function read(reader: Read) {
  const data = {} as Struct_713;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u16();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  return data;
}
