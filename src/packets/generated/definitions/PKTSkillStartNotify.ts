// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  unk1_m?: number;
  skillLevel: number;
  aiStateId?: number;
  sourceId: bigint;
  skillOptionData: SkillOptionData.SkillOptionData;
  newPosition: Vector3F.Vector3F;
  curPosition: Vector3F.Vector3F;
  aimTargetPosition: Vector3F.Vector3F;
  curDirectionYaw: Angle.Angle;
  skillId: number;
  newDirectionYaw: Angle.Angle;
  pitchRotation?: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  if (reader.bool()) data.aiStateId = reader.u32();
  data.sourceId = reader.u64();
  data.skillOptionData = SkillOptionData.read(reader);
  data.newPosition = Vector3F.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 38006;
