// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  skillOptionData: SkillOptionData.SkillOptionData;
  newPosition: Vector3F.Vector3F;
  sourceId: bigint;
  aimTargetPosition: Vector3F.Vector3F;
  skillLevel: number;
  pitchRotation?: Angle.Angle;
  curPosition: Vector3F.Vector3F;
  aiStateId?: number;
  newDirectionYaw: Angle.Angle;
  skillId: number;
  curDirectionYaw: Angle.Angle;
  unk1_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.skillOptionData = SkillOptionData.read(reader);
  data.newPosition = Vector3F.read(reader);
  data.sourceId = reader.u64();
  data.aimTargetPosition = Vector3F.read(reader);
  data.skillLevel = reader.u8();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.curPosition = Vector3F.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.curDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 53701;
