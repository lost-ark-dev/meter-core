// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_733 = {
  lookData: Buffer;
  unk1: bigint;
  unk2: number;
  unk3: number;
  lostArkString: string;
  unk5: number;
  unk6: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk8: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_733;
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u16();
  data.lostArkString = reader.string(20);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk8 = reader.u64();
  return data;
}
