// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  aimTargetPosition: Vector3F.Vector3F;
  curPosition: Vector3F.Vector3F;
  sourceId: bigint;
  skillLevel: number;
  skillOptionData: SkillOptionData.SkillOptionData;
  aiStateId?: number;
  curDirectionYaw: Angle.Angle;
  unk1_m?: number;
  newPosition: Vector3F.Vector3F;
  skillId: number;
  pitchRotation?: Angle.Angle;
  newDirectionYaw: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.aimTargetPosition = Vector3F.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.sourceId = reader.u64();
  data.skillLevel = reader.u8();
  data.skillOptionData = SkillOptionData.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.curDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.newPosition = Vector3F.read(reader);
  data.skillId = reader.u32();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 110;
