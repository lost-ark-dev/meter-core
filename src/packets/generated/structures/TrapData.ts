// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  ownerId: bigint;
  objectId: bigint;
  skillId: number;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_337?: Buffer;
  skillEffect: number;
  unk10: number;
  unk11: number;
  position: Vector3F.Vector3F;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.ownerId = reader.u64();
  data.objectId = reader.u64();
  data.skillId = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  data.skillEffect = reader.u32();
  data.unk10 = reader.u8();
  data.unk11 = reader.u16();
  data.position = Vector3F.read(reader);
  data.unk13 = reader.u8();
  return data;
}
