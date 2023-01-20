// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  Unk1_m: number;
  SkillId: number;
  SkillEffectId: number;
  Unk2_m: number;
  SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
  SourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.Unk1_m = reader.u8();
  data.SkillId = reader.u32();
  data.SkillEffectId = reader.u32();
  data.Unk2_m = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  data.SourceId = reader.u64();
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 16593;
