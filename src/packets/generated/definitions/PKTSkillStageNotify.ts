// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  SourceId: bigint;
  Stage: number;
  SkillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(29);
  data.SourceId = reader.u64();
  reader.skip(4);
  data.Stage = reader.u8();
  reader.skip(8);
  data.SkillId = reader.u32();
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 6028;
