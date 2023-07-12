// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  paralyzationMaxPoint: number;
  objectId: bigint;
  paralyzationPoint: number;
  type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  reader.skip(1);
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  data.type = reader.u8();
  reader.skip(1);
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 36983;
