// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  skillEffect: number;
  skillId: number;
  position: Vector3F.Vector3F;
  ownerId: bigint;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_335?: Buffer;
  unk9: number;
  unk10: number;
  objectId: bigint;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.position = Vector3F.read(reader);
  data.ownerId = reader.u64();
  data.unk4 = reader.u16();
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  if (reader.bool()) data.struct_335 = reader.bytes(reader.u16(), 11, 9);
  data.unk9 = reader.u8();
  data.unk10 = reader.u32();
  data.objectId = reader.u64();
  data.unk12 = reader.u32();
  data.unk13 = reader.u8();
  return data;
}
