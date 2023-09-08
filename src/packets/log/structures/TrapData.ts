import type { Read, Write } from "../../stream";
import type { TrapData } from "../../generated/structures/TrapData";
import * as Vector3F from "../../common/Vector3F";
export type TrapDataLog = {
  position: Vector3F.Vector3F;
  objectId: bigint;
  ownerId: bigint;
  skillId: number;
  skillEffect: number;
};
export function read(reader: Read, version: number) {
  const data = {} as TrapDataLog;
  data.position = Vector3F.read(reader);
  data.objectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.skillEffect = reader.u32();
  return data;
}
export function write(writer: Write, data: TrapDataLog | TrapData) {
  Vector3F.write(writer, data.position);
  writer.u64(data.objectId);
  writer.u64(data.ownerId);
  writer.u32(data.skillId);
  writer.u32(data.skillEffect);
}
