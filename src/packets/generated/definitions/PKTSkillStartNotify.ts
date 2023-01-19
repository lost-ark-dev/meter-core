// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  SourceId: bigint;
  CurPosition: Vector3F.Vector3F;
  Unk1_m?: number;
  NewPosition: Vector3F.Vector3F;
  CurDirectionYaw: Angle.Angle;
  AimTargetPosition: Vector3F.Vector3F;
  AiStateId?: number;
  SkillLevel: number;
  SkillId: number;
  NewDirectionYaw: Angle.Angle;
  SkillOptionData: SkillOptionData.SkillOptionData;
  PitchRotation?: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.SourceId = reader.u64();
  data.CurPosition = Vector3F.read(reader);
  if (reader.bool()) data.Unk1_m = reader.i32();
  data.NewPosition = Vector3F.read(reader);
  data.CurDirectionYaw = Angle.read(reader);
  data.AimTargetPosition = Vector3F.read(reader);
  if (reader.bool()) data.AiStateId = reader.u32();
  data.SkillLevel = reader.u8();
  data.SkillId = reader.u32();
  data.NewDirectionYaw = Angle.read(reader);
  data.SkillOptionData = SkillOptionData.read(reader);
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 28344;
