// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  skillEffectId: number;
  unk2_m: number;
  skillId: number;
  skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
  sourceId: bigint;
  unk1_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.skillEffectId = reader.u32();
  data.unk2_m = reader.u32();
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  data.sourceId = reader.u64();
  data.unk1_m = reader.u8();
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 2222;
