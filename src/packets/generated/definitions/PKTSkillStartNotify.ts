// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  CurDirectionYaw: Angle.Angle;
  SourceId: bigint;
  SkillLevel: number;
  CurPosition: Vector3F.Vector3F;
  PitchRotation?: Angle.Angle;
  NewPosition: Vector3F.Vector3F;
  AimTargetPosition: Vector3F.Vector3F;
  SkillOptionData: SkillOptionData.SkillOptionData;
  NewDirectionYaw: Angle.Angle;
  SkillId: number;
  Unk1_m?: number;
  AiStateId?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.CurDirectionYaw = Angle.read(reader);
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.CurPosition = Vector3F.read(reader);
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  data.NewPosition = Vector3F.read(reader);
  data.AimTargetPosition = Vector3F.read(reader);
  data.SkillOptionData = SkillOptionData.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.SkillId = reader.u32();
  if (reader.bool()) data.Unk1_m = reader.i32();
  if (reader.bool()) data.AiStateId = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 38704;
