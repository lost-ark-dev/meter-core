// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  SkillLevel: number;
  AiStateId?: number;
  SkillId: number;
  SkillOptionData: SkillOptionData.SkillOptionData;
  PitchRotation?: Angle.Angle;
  NewDirectionYaw: Angle.Angle;
  NewPosition: Vector3F.Vector3F;
  CurPosition: Vector3F.Vector3F;
  AimTargetPosition: Vector3F.Vector3F;
  CurDirectionYaw: Angle.Angle;
  Unk1_m?: number;
  SourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.AiStateId = reader.u32();
  data.SkillId = reader.u32();
  data.SkillOptionData = SkillOptionData.read(reader);
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.NewPosition = Vector3F.read(reader);
  data.CurPosition = Vector3F.read(reader);
  data.AimTargetPosition = Vector3F.read(reader);
  data.CurDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk1_m = reader.i32();
  data.SourceId = reader.u64();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 13284;
