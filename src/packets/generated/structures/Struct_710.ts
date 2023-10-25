// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_710 = {
  unk0: number;
  lostArkString: string;
  unk2: bigint;
  unk3: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk5: number;
  lookData: Buffer;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_710;
  data.unk0 = reader.u8();
  data.lostArkString = reader.string(20);
  data.unk2 = reader.u64();
  data.unk3 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk5 = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk7 = reader.u8();
  return data;
}
