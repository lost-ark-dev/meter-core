import type { Read, Write } from "../../stream";
import type { ItemData } from "../../generated/structures/ItemData";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type ItemDataLog = {
  serialNumber?: bigint;
  id?: number;
  level?: number;
  slot?: number;
  durability?: number;
  unk1_6_m?: number;
  flag?: number;
  expireTime?: LostArkDateTime.LostArkDateTime;
  lockUpdateTime?: LostArkDateTime.LostArkDateTime;
};
export function read(reader: Read, version: number) {
  const data = {} as ItemDataLog;
  if (reader.bool()) {
    //TODO: count should be saved in the object instead of just used
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = LostArkDateTime.read(reader);
    data.lockUpdateTime = LostArkDateTime.read(reader);
  }
  return data;
}
export function write(writer: Write, data: ItemDataLog | ItemData) {
  if (writer.bool(data.slot !== undefined)) {
    writer.u64(data.serialNumber);
    writer.u32(data.id);
    writer.u16(data.level);
    writer.u16(data.slot);
    writer.u32(data.durability);
    writer.u32(data.unk1_6_m);
    writer.u32(data.flag);
    LostArkDateTime.write(writer, data.expireTime);
    LostArkDateTime.write(writer, data.lockUpdateTime);
  }
}
