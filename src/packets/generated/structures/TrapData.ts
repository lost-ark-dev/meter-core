// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  ownerId: bigint;
  skillId: number;
  position: Vector3F.Vector3F;
  unk3: number;
  unk4: number;
  unk5: number;
  skillEffect: number;
  objectId: bigint;
  unk8: number;
  unk9: number;
  unk10: number;
  unk11: number;
  struct_337?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.position = Vector3F.read(reader);
  data.unk3 = reader.u16();
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.skillEffect = reader.u32();
  data.objectId = reader.u64();
  data.unk8 = reader.u32();
  data.unk9 = reader.u8();
  data.unk10 = reader.u32();
  data.unk11 = reader.u8();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  return data;
}
