// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  type: number;
  objectId: bigint;
  paralyzationPoint: number;
  paralyzationMaxPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.type = reader.u8();
  reader.skip(1);
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  reader.skip(2);
  data.paralyzationMaxPoint = reader.u32();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 39282;
