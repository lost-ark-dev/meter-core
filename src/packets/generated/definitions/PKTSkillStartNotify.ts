// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  newDirectionYaw: Angle.Angle;
  sourceId: bigint;
  skillOptionData: SkillOptionData.SkillOptionData;
  curDirectionYaw: Angle.Angle;
  aimTargetPosition: Vector3F.Vector3F;
  unk1_m?: number;
  aiStateId?: number;
  pitchRotation?: Angle.Angle;
  newPosition: Vector3F.Vector3F;
  skillId: number;
  curPosition: Vector3F.Vector3F;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.newDirectionYaw = Angle.read(reader);
  data.sourceId = reader.u64();
  data.skillOptionData = SkillOptionData.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  if (reader.bool()) data.unk1_m = reader.u32();
  if (reader.bool()) data.aiStateId = reader.u32();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.newPosition = Vector3F.read(reader);
  data.skillId = reader.u32();
  data.curPosition = Vector3F.read(reader);
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 37316;
