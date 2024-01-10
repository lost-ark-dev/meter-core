// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_730 = {
  unk0: number;
  lookData: Buffer;
  lostArkString: string;
  unk3: number;
  unk4: bigint;
  unk5: bigint;
  unk6: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk8: number;
};
export function read(reader: Read) {
  const data = {} as Struct_730;
  data.unk0 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  data.unk3 = reader.u16();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk8 = reader.u8();
  return data;
}
