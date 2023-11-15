// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_331?: Buffer;
  skillId: number;
  unk6: number;
  unk7: number;
  unk8: number;
  unk9: number;
  skillEffect: number;
  position: Vector3F.Vector3F;
  objectId: bigint;
  ownerId: bigint;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool()) data.struct_331 = reader.bytes(reader.u16(), 11, 9);
  data.skillId = reader.u32();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  data.unk8 = reader.u8();
  data.unk9 = reader.u16();
  data.skillEffect = reader.u32();
  data.position = Vector3F.read(reader);
  data.objectId = reader.u64();
  data.ownerId = reader.u64();
  return data;
}
