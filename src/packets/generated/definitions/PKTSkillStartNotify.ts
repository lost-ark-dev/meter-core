// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  curDirectionYaw: Angle.Angle;
  skillId: number;
  curPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  skillLevel: number;
  skillOptionData: SkillOptionData.SkillOptionData;
  newDirectionYaw: Angle.Angle;
  aiStateId?: number;
  newPosition: Vector3F.Vector3F;
  aimTargetPosition: Vector3F.Vector3F;
  sourceId: bigint;
  unk1_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.curPosition = Vector3F.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.skillLevel = reader.u8();
  data.skillOptionData = SkillOptionData.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.newPosition = Vector3F.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk1_m = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 54462;
