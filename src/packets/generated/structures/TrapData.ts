// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  unk0: number;
  unk1: number;
  skillId: number;
  ownerId: bigint;
  skillEffect: number;
  objectId: bigint;
  position: Vector3F.Vector3F;
  unk7: number;
  unk8: number;
  unk9: number;
  unk10: number;
  unk11: number;
  struct_329?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.skillId = reader.u32();
  data.ownerId = reader.u64();
  data.skillEffect = reader.u32();
  data.objectId = reader.u64();
  data.position = Vector3F.read(reader);
  data.unk7 = reader.u32();
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  data.unk10 = reader.u8();
  data.unk11 = reader.u16();
  if (reader.bool()) data.struct_329 = reader.bytes(reader.u16(), 11, 9);
  return data;
}
