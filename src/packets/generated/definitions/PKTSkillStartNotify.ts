// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  skillId: number;
  unk1_m?: number;
  curDirectionYaw: Angle.Angle;
  curPosition: Vector3F.Vector3F;
  newDirectionYaw: Angle.Angle;
  aiStateId?: number;
  pitchRotation?: Angle.Angle;
  aimTargetPosition: Vector3F.Vector3F;
  sourceId: bigint;
  newPosition: Vector3F.Vector3F;
  skillOptionData: SkillOptionData.SkillOptionData;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.skillId = reader.u32();
  if (reader.bool()) data.unk1_m = reader.u32();
  data.curDirectionYaw = Angle.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.sourceId = reader.u64();
  data.newPosition = Vector3F.read(reader);
  data.skillOptionData = SkillOptionData.read(reader);
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 37127;
