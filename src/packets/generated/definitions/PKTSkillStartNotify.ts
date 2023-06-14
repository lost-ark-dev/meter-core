// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  skillOptionData: SkillOptionData.SkillOptionData;
  skillLevel: number;
  aiStateId?: number;
  pitchRotation?: Angle.Angle;
  sourceId: bigint;
  curPosition: Vector3F.Vector3F;
  newPosition: Vector3F.Vector3F;
  unk1_m?: number;
  curDirectionYaw: Angle.Angle;
  skillId: number;
  aimTargetPosition: Vector3F.Vector3F;
  newDirectionYaw: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.skillOptionData = SkillOptionData.read(reader);
  data.skillLevel = reader.u8();
  if (reader.bool()) data.aiStateId = reader.u32();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.sourceId = reader.u64();
  data.curPosition = Vector3F.read(reader);
  data.newPosition = Vector3F.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.aimTargetPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 26713;
