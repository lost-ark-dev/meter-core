// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  unk1_m?: number;
  aiStateId?: number;
  pitchRotation?: Angle.Angle;
  newDirectionYaw: Angle.Angle;
  sourceId: bigint;
  newPosition: Vector3F.Vector3F;
  skillOptionData: SkillOptionData.SkillOptionData;
  aimTargetPosition: Vector3F.Vector3F;
  curDirectionYaw: Angle.Angle;
  curPosition: Vector3F.Vector3F;
  skillId: number;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.unk1_m = reader.u32();
  if (reader.bool()) data.aiStateId = reader.u32();
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  data.sourceId = reader.u64();
  data.newPosition = Vector3F.read(reader);
  data.skillOptionData = SkillOptionData.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 22542;
