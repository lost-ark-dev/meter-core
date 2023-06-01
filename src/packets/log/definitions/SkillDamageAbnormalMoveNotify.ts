import type { Read, Write } from "../../stream";
import type { PKTSkillDamageAbnormalMoveNotify } from "../../generated/types";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type SkillDamageAbnormalMoveNotify = {
  skillId: number;
  skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEventLog[];
  skillEffectId: number;
  sourceId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageAbnormalMoveNotify;
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => SkillDamageAbnormalMoveEvent.read(reader, version),
    50
  );
  data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
export function write(writer: Write, data: SkillDamageAbnormalMoveNotify | PKTSkillDamageAbnormalMoveNotify) {
  writer.u32(data.skillId);
  writer.array(
    data.skillDamageAbnormalMoveEvents,
    { maxLen: 50, lenType: "u16" },
    (obj: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEventLog) => {
      SkillDamageAbnormalMoveEvent.write(writer, obj);
    }
  );
  writer.u32(data.skillEffectId);
  writer.u64(data.sourceId);
}

export const name = "SkillDamageAbnormalMoveNotify";
