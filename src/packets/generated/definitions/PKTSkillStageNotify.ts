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
  reader.skip(14);
  data.stage = reader.u8();
  reader.skip(1);
  data.skillId = reader.u32();
  reader.skip(17);
  data.sourceId = reader.u64();
  reader.skip(9);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 17268;
