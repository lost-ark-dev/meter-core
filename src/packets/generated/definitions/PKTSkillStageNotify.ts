// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  sourceId: bigint;
  stage: number;
  skillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(19);
  data.sourceId = reader.u64();
  reader.skip(4);
  data.stage = reader.u8();
  reader.skip(9);
  data.skillId = reader.u32();
  reader.skip(8);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 26835;
