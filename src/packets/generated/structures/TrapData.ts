// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  objectId: bigint;
  unk1: number;
  unk2: number;
  position: Vector3F.Vector3F;
  skillEffect: number;
  ownerId: bigint;
  unk6: number;
  unk7: number;
  unk8: number;
  struct_333?: Buffer;
  unk11: number;
  unk12: number;
  skillId: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.objectId = reader.u64();
  data.unk1 = reader.u16();
  data.unk2 = reader.u8();
  data.position = Vector3F.read(reader);
  data.skillEffect = reader.u32();
  data.ownerId = reader.u64();
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  data.unk8 = reader.u32();
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.unk11 = reader.u8();
  data.unk12 = reader.u32();
  data.skillId = reader.u32();
  return data;
}
