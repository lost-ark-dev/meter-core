import type { Read, Write } from "../../stream";
import type { SkillDamageAbnormalMoveEvent } from "../../generated/structures/SkillDamageAbnormalMoveEvent";
import * as Vector3F from "../../common/Vector3F";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as SkillDamageEvent from "./SkillDamageEvent";

export type SkillDamageAbnormalMoveEventLog = {
  SkillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  Destination: Vector3F.Vector3F;
  Position: Vector3F.Vector3F;
  skillDamageEvent: SkillDamageEvent.SkillDamageEventLog;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageAbnormalMoveEventLog;
  data.SkillMoveOptionData = SkillMoveOptionData.read(reader, version);
  data.Destination = Vector3F.read(reader, version);
  data.Position = Vector3F.read(reader, version);
  data.skillDamageEvent = SkillDamageEvent.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillDamageAbnormalMoveEventLog | SkillDamageAbnormalMoveEvent) {
  SkillMoveOptionData.write(writer, data.SkillMoveOptionData);
  Vector3F.write(writer, data.Destination);
  Vector3F.write(writer, data.Position);
  SkillDamageEvent.write(writer, data.skillDamageEvent);
}
