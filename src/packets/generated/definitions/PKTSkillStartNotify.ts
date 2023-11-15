// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  unk1_m?: number;
  skillLevel: number;
  aimTargetPosition: Vector3F.Vector3F;
  skillOptionData: SkillOptionData.SkillOptionData;
  sourceId: bigint;
  skillId: number;
  curPosition: Vector3F.Vector3F;
  newDirectionYaw: Angle.Angle;
  newPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  curDirectionYaw: Angle.Angle;
  aiStateId?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  data.aimTargetPosition = Vector3F.read(reader);
  data.skillOptionData = SkillOptionData.read(reader);
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.curPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  data.newPosition = Vector3F.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 35173;
