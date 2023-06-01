import type { Read, Write } from "../../stream";
import type { SkillDamageAbnormalMoveEvent } from "../../generated/structures/SkillDamageAbnormalMoveEvent";
import * as Vector3F from "../../common/Vector3F";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as SkillDamageEvent from "./SkillDamageEvent";

export type SkillDamageAbnormalMoveEventLog = {
  skillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  destination: Vector3F.Vector3F;
  position: Vector3F.Vector3F;
  skillDamageEvent: SkillDamageEvent.SkillDamageEventLog;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageAbnormalMoveEventLog;
  data.skillMoveOptionData = SkillMoveOptionData.read(reader, version);
  data.destination = Vector3F.read(reader, version);
  data.position = Vector3F.read(reader, version);
  data.skillDamageEvent = SkillDamageEvent.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillDamageAbnormalMoveEventLog | SkillDamageAbnormalMoveEvent) {
  SkillMoveOptionData.write(writer, data.skillMoveOptionData);
  Vector3F.write(writer, data.destination);
  Vector3F.write(writer, data.position);
  SkillDamageEvent.write(writer, data.skillDamageEvent);
}
