// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  paralyzationMaxPoint: number;
  type: number;
  paralyzationPoint: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  reader.skip(1);
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(2);
  data.type = reader.u8();
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 45172;
