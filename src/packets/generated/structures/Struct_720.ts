// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_720 = {
  unk0: number;
  unk1: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk3: bigint;
  unk4: number;
  lookData: Buffer;
  lostArkString: string;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_720;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk3 = reader.u64();
  data.unk4 = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  data.unk7 = reader.u8();
  return data;
}
