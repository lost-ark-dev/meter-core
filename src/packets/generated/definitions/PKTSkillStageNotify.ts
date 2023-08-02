// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  stage: number;
  sourceId: bigint;
  skillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(12);
  data.stage = reader.u8();
  reader.skip(16);
  data.sourceId = reader.u64();
  reader.skip(13);
  data.skillId = reader.u32();
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 10486;
