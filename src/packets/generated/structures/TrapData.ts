// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  position: Vector3F.Vector3F;
  unk1: number;
  unk2: number;
  unk3: number;
  objectId: bigint;
  unk5: number;
  unk6: number;
  ownerId: bigint;
  unk8: number;
  unk9: number;
  skillId: number;
  skillEffect: number;
  struct_333?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.position = Vector3F.read(reader);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.objectId = reader.u64();
  data.unk5 = reader.u16();
  data.unk6 = reader.u32();
  data.ownerId = reader.u64();
  data.unk8 = reader.u8();
  data.unk9 = reader.u8();
  data.skillId = reader.u32();
  data.skillEffect = reader.u32();
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  return data;
}
