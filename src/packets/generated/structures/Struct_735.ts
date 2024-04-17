// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_735 = {
  equipItemDataList: EquipItemData.EquipItemData[];
  lostArkString: string;
  lookData: Buffer;
  unk3: number;
  unk4: bigint;
  unk5: number;
  unk6: bigint;
  unk7: number;
  unk8: number;
};
export function read(reader: Read) {
  const data = {} as Struct_735;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.lostArkString = reader.string(20);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.unk7 = reader.u8();
  data.unk8 = reader.u16();
  return data;
}
