// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_711 = {
  unk0: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  lostArkString: string;
  unk3: number;
  lookData: Buffer;
  unk5: number;
  unk6: number;
  unk7: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_711;
  data.unk0 = reader.u16();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.lostArkString = reader.string(20);
  data.unk3 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
