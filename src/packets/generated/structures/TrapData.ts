// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  skillEffect: number;
  unk1: number;
  position: Vector3F.Vector3F;
  unk3: number;
  objectId: bigint;
  skillId: number;
  unk6: number;
  unk7: number;
  ownerId: bigint;
  unk9: number;
  struct_341?: Buffer;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.skillEffect = reader.u32();
  data.unk1 = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk3 = reader.u8();
  data.objectId = reader.u64();
  data.skillId = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  data.ownerId = reader.u64();
  data.unk9 = reader.u32();
  if (reader.bool()) data.struct_341 = reader.bytes(reader.u16(), 11, 9);
  data.unk12 = reader.u32();
  data.unk13 = reader.u16();
  return data;
}
