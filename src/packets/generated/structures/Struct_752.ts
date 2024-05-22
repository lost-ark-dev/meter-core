// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_752 = {
  equipItemDataList: EquipItemData.EquipItemData[];
  unk1: bigint;
  unk2: number;
  unk3: number;
  unk4: bigint;
  lostArkString: string;
  unk6: number;
  lookData: Buffer;
  unk8: bigint;
  unk9: number;
};
export function read(reader: Read) {
  const data = {} as Struct_752;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.lostArkString = reader.string(20);
  data.unk6 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk8 = reader.u64();
  data.unk9 = reader.u16();
  return data;
}
