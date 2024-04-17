// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  pitchRotation?: Angle.Angle;
  newDirectionYaw: Angle.Angle;
  curPosition: Vector3F.Vector3F;
  sourceId: bigint;
  unk1_m?: number;
  curDirectionYaw: Angle.Angle;
  skillId: number;
  skillLevel: number;
  skillOptionData: SkillOptionData.SkillOptionData;
  aimTargetPosition: Vector3F.Vector3F;
  newPosition: Vector3F.Vector3F;
  aiStateId?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk1_m = reader.u32();
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  data.skillOptionData = SkillOptionData.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.newPosition = Vector3F.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 12220;
