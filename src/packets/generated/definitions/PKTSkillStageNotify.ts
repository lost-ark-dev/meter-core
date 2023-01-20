// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  Stage: number;
  SkillId: number;
  SourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(8);
  data.Stage = reader.u8();
  data.SkillId = reader.u32();
  reader.skip(28);
  data.SourceId = reader.u64();
  reader.skip(5);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 17861;
