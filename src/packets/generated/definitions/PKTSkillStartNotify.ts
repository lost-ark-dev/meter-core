// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  skillLevel: number;
  unk1_m?: number;
  curPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  aimTargetPosition: Vector3F.Vector3F;
  newDirectionYaw: Angle.Angle;
  aiStateId?: number;
  sourceId: bigint;
  skillId: number;
  skillOptionData: SkillOptionData.SkillOptionData;
  curDirectionYaw: Angle.Angle;
  newPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.skillLevel = reader.u8();
  if (reader.bool()) data.unk1_m = reader.u32();
  data.curPosition = Vector3F.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillOptionData = SkillOptionData.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.newPosition = Vector3F.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 52767;
