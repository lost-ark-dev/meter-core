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
  data.skillId = reader.u32();
  reader.skip(19);
  data.stage = reader.u8();
  data.sourceId = reader.u64();
  reader.skip(20);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 43447;
