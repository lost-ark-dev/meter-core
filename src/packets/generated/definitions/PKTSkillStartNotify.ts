// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  sourceId: bigint;
  skillId: number;
  aimTargetPosition: Vector3F.Vector3F;
  unk1_m?: number;
  newDirectionYaw: Angle.Angle;
  aiStateId?: number;
  newPosition: Vector3F.Vector3F;
  curPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  skillLevel: number;
  curDirectionYaw: Angle.Angle;
  skillOptionData: SkillOptionData.SkillOptionData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.aimTargetPosition = Vector3F.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.newPosition = Vector3F.read(reader);
  data.curPosition = Vector3F.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.skillLevel = reader.u8();
  data.curDirectionYaw = Angle.read(reader);
  data.skillOptionData = SkillOptionData.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 22915;
