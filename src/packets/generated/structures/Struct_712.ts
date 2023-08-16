// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_712 = {
  unk0: number;
  lookData: Buffer;
  unk2: number;
  lostArkString: string;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk5: number;
  unk6: number;
  unk7: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_712;
  data.unk0 = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk2 = reader.u8();
  data.lostArkString = reader.string(20);
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
