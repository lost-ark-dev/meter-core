// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  sourceId: bigint;
  skillId: number;
  stage: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  data.sourceId = reader.u64();
  reader.skip(25);
  data.skillId = reader.u32();
  reader.skip(2);
  data.stage = reader.u8();
  reader.skip(12);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 26136;
