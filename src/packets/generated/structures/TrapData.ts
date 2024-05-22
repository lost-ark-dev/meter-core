// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  skillEffect: number;
  unk1: number;
  position: Vector3F.Vector3F;
  objectId: bigint;
  unk4: number;
  unk5: number;
  unk6: number;
  ownerId: bigint;
  unk8: number;
  unk9: number;
  skillId: number;
  unk11: number;
  struct_343?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.skillEffect = reader.u32();
  data.unk1 = reader.u8();
  data.position = Vector3F.read(reader);
  data.objectId = reader.u64();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.ownerId = reader.u64();
  data.unk8 = reader.u8();
  data.unk9 = reader.u16();
  data.skillId = reader.u32();
  data.unk11 = reader.u32();
  if (reader.bool()) data.struct_343 = reader.bytes(reader.u16(), 11, 9);
  return data;
}
