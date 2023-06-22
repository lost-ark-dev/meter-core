// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  pitchRotation?: Angle.Angle;
  curDirectionYaw: Angle.Angle;
  skillId: number;
  skillOptionData: SkillOptionData.SkillOptionData;
  aiStateId?: number;
  unk1_m?: number;
  newDirectionYaw: Angle.Angle;
  sourceId: bigint;
  curPosition: Vector3F.Vector3F;
  aimTargetPosition: Vector3F.Vector3F;
  skillLevel: number;
  newPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.skillOptionData = SkillOptionData.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  if (reader.bool()) data.unk1_m = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  data.sourceId = reader.u64();
  data.curPosition = Vector3F.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.skillLevel = reader.u8();
  data.newPosition = Vector3F.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 28400;
