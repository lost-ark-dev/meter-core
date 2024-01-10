// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  unk1_m: number;
  sourceId: bigint;
  skillEffectId: number;
  skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
  unk2_m: number;
  skillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.unk1_m = reader.u8();
  data.sourceId = reader.u64();
  data.skillEffectId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  data.unk2_m = reader.u32();
  data.skillId = reader.u32();
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 55047;
