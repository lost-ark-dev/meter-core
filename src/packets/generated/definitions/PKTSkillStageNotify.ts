// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  skillId: number;
  stage: number;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(40);
  data.skillId = reader.u32();
  data.stage = reader.u8();
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 53055;
