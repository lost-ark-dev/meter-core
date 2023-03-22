// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  Stage: number;
  SourceId: bigint;
  SkillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  reader.skip(13);
  data.Stage = reader.u8();
  data.SourceId = reader.u64();
  reader.skip(19);
  data.SkillId = reader.u32();
  reader.skip(8);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 23925;
