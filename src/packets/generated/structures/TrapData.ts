// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  unk0: number;
  unk1: number;
  ownerId: bigint;
  skillId: number;
  unk4: number;
  unk5: number;
  skillEffect: number;
  unk7: number;
  objectId: bigint;
  unk9: number;
  unk10: number;
  struct_332?: Buffer;
  position: Vector3F.Vector3F;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.skillEffect = reader.u32();
  data.unk7 = reader.u32();
  data.objectId = reader.u64();
  data.unk9 = reader.u8();
  data.unk10 = reader.u16();
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  data.position = Vector3F.read(reader);
  return data;
}
