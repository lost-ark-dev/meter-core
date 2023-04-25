import type { Read, Write } from "../../stream";
import type { PKTSkillDamageAbnormalMoveNotify } from "../../generated/types";
import * as SkillDamageAbnormalMoveEvent from "../structures/SkillDamageAbnormalMoveEvent";
export type SkillDamageAbnormalMoveNotify = {
  SkillId: number;
  SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEventLog[];
  SkillEffectId: number;
  SourceId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageAbnormalMoveNotify;
  data.SkillId = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => SkillDamageAbnormalMoveEvent.read(reader, version),
    50
  );
  data.SkillEffectId = reader.u32();
  data.SourceId = reader.u64();
  return data;
}
export function write(writer: Write, data: SkillDamageAbnormalMoveNotify | PKTSkillDamageAbnormalMoveNotify) {
  writer.u32(data.SkillId);
  writer.array(
    data.SkillDamageAbnormalMoveEvents,
    { maxLen: 50, lenType: "u16" },
    (obj: SkillDamageAbnormalMoveEvent.SkillDamageAbnormalMoveEventLog) => {
      SkillDamageAbnormalMoveEvent.write(writer, obj);
    }
  );
  writer.u32(data.SkillEffectId);
  writer.u64(data.SourceId);
}

export const logId = 29;
export const name = "SkillDamageAbnormalMoveNotify";
