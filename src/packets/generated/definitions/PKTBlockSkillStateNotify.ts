// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  paralyzationPoint: number;
  type: number;
  paralyzationMaxPoint: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.paralyzationPoint = reader.u32();
  data.type = reader.u8();
  data.paralyzationMaxPoint = reader.u32();
  data.objectId = reader.u64();
  reader.skip(1);
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 40912;
