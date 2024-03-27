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
  reader.skip(4);
  data.skillId = reader.u32();
  reader.skip(12);
  data.stage = reader.u8();
  reader.skip(17);
  data.sourceId = reader.u64();
  reader.skip(8);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 43936;
