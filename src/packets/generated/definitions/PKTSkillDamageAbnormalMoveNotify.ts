// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  skillEffectId: number;
  unk2_m: number;
  unk1_m: number;
  sourceId: bigint;
  skillId: number;
  skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.skillEffectId = reader.u32();
  data.unk2_m = reader.u32();
  data.unk1_m = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 50167;
