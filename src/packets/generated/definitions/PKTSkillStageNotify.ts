// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  stage: number;
  skillId: number;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  data.stage = reader.u8();
  reader.skip(4);
  data.skillId = reader.u32();
  reader.skip(16);
  data.sourceId = reader.u64();
  reader.skip(19);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 18388;
