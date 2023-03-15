// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  CurDirectionYaw: Angle.Angle;
  SourceId: bigint;
  Unk1_m?: number;
  AiStateId?: number;
  SkillOptionData: SkillOptionData.SkillOptionData;
  AimTargetPosition: Vector3F.Vector3F;
  NewDirectionYaw: Angle.Angle;
  SkillId: number;
  NewPosition: Vector3F.Vector3F;
  CurPosition: Vector3F.Vector3F;
  SkillLevel: number;
  PitchRotation?: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.CurDirectionYaw = Angle.read(reader);
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk1_m = reader.i32();
  if (reader.bool()) data.AiStateId = reader.u32();
  data.SkillOptionData = SkillOptionData.read(reader);
  data.AimTargetPosition = Vector3F.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.SkillId = reader.u32();
  data.NewPosition = Vector3F.read(reader);
  data.CurPosition = Vector3F.read(reader);
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 37729;
