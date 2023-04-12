// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type PKTSkillDamageAbnormalMoveNotify = {
  SkillId: number;
  Unk2_m: number;
  Unk1_m: number;
  SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEvent[];
  SkillEffectId: number;
  SourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageAbnormalMoveNotify;
  data.SkillId = reader.u32();
  data.Unk2_m = reader.u32();
  data.Unk1_m = reader.u8();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => SkillDamageAbnormalMoveEvent.read(reader), 50);
  data.SkillEffectId = reader.u32();
  data.SourceId = reader.u64();
  return data;
}
export const name = "PKTSkillDamageAbnormalMoveNotify";
export const opcode = 44143;
