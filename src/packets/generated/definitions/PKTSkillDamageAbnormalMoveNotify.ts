// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  Unk2_m: number;
  Unk1_m: number;
  SkillEffectId: number;
  SkillId: number;
  SourceId: bigint;
  SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.Unk2_m = reader.u32();
  data.Unk1_m = reader.u8();
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 15322;
