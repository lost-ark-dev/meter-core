// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_734 = {
  unk0: bigint;
  unk1: number;
  unk2: bigint;
  unk3: number;
  lostArkString: string;
  unk5: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk7: number;
  lookData: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_734;
  data.unk0 = reader.u64();
  data.unk1 = reader.u16();
  data.unk2 = reader.u64();
  data.unk3 = reader.u8();
  data.lostArkString = reader.string(20);
  data.unk5 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk7 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  return data;
}
