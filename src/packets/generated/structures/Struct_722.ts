// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_722 = {
  unk0: number;
  lostArkString: string;
  lookData: Buffer;
  unk3: bigint;
  unk4: number;
  unk5: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_722;
  data.unk0 = reader.u8();
  data.lostArkString = reader.string(20);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk7 = reader.u16();
  return data;
}
