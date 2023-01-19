// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  SkillId: number;
  SourceId: bigint;
  Stage: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  reader.skip(33);
  data.Stage = reader.u8();
  reader.skip(6);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 47144;
