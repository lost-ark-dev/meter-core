// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  objectId: bigint;
  skillId: number;
  unk2: number;
  position: Vector3F.Vector3F;
  struct_332?: Buffer;
  unk6: number;
  skillEffect: number;
  unk8: number;
  unk9: number;
  ownerId: bigint;
  unk11: number;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.objectId = reader.u64();
  data.skillId = reader.u32();
  data.unk2 = reader.u8();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  data.unk6 = reader.u32();
  data.skillEffect = reader.u32();
  data.unk8 = reader.u8();
  data.unk9 = reader.u16();
  data.ownerId = reader.u64();
  data.unk11 = reader.u8();
  data.unk12 = reader.u32();
  data.unk13 = reader.u32();
  return data;
}
