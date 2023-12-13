// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  unk0: number;
  unk1: number;
  unk2: number;
  skillEffect: number;
  ownerId: bigint;
  position: Vector3F.Vector3F;
  struct_332?: Buffer;
  unk8: number;
  unk9: number;
  unk10: number;
  objectId: bigint;
  skillId: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.unk0 = reader.u8();
  data.unk1 = reader.u16();
  data.unk2 = reader.u32();
  data.skillEffect = reader.u32();
  data.ownerId = reader.u64();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  data.unk8 = reader.u8();
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  data.objectId = reader.u64();
  data.skillId = reader.u32();
  data.unk13 = reader.u8();
  return data;
}
