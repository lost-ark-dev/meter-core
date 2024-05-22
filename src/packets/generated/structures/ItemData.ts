// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
import * as Struct_577 from "../structures/Struct_577";
export type ItemData = {
  serialNumber?: bigint;
  id?: number;
  level?: number;
  slot?: number;
  durability?: number;
  unk1_6_m?: number;
  flag?: number;
  expireTime?: LostArkDateTime.LostArkDateTime;
  lockUpdateTime?: LostArkDateTime.LostArkDateTime;
  unk1_10_0?: Buffer;
  unk1_11?: number;
  unk1_12?: number;
  unk1_13?: number;
  struct_577?: Struct_577.Struct_577;
  unk1_15?: number;
};
export function read(reader: Read) {
  const data = {} as ItemData;
  const count = reader.u32();
  if (count > 0) {
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = LostArkDateTime.read(reader);
    data.lockUpdateTime = LostArkDateTime.read(reader);
    if (reader.bool()) data.unk1_10_0 = reader.bytes(9);
    data.unk1_11 = reader.u8();
    data.unk1_12 = reader.u8();
    data.unk1_13 = reader.u32();
    data.struct_577 = Struct_577.read(reader);
    data.unk1_15 = reader.u32();
  }
  return data;
}
