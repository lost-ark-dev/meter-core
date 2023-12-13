// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  type: number;
  paralyzationMaxPoint: number;
  paralyzationPoint: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  reader.skip(1);
  data.type = reader.u8();
  data.paralyzationMaxPoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 22660;
