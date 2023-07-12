// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_712 = {
  lookData: Buffer;
  unk1: number;
  unk2: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk4: number;
  unk5: number;
  unk6: number;
  lostArkString: string;
};
export function read(reader: Read) {
  const data = {} as Struct_712;
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk1 = reader.u8();
  data.unk2 = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk4 = reader.u16();
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.lostArkString = reader.string(20);
  return data;
}
