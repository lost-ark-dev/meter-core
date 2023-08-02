// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  aiStateId?: number;
  newPosition: Vector3F.Vector3F;
  curPosition: Vector3F.Vector3F;
  curDirectionYaw: Angle.Angle;
  skillId: number;
  skillLevel: number;
  sourceId: bigint;
  skillOptionData: SkillOptionData.SkillOptionData;
  pitchRotation?: Angle.Angle;
  unk1_m?: number;
  newDirectionYaw: Angle.Angle;
  aimTargetPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.aiStateId = reader.u32();
  data.newPosition = Vector3F.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillOptionData = SkillOptionData.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 37543;
