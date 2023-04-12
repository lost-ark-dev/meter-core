// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillStartNotify = {
  SourceId: bigint;
  CurDirectionYaw: Angle.Angle;
  NewDirectionYaw: Angle.Angle;
  AimTargetPosition: Vector3F.Vector3F;
  PitchRotation?: Angle.Angle;
  AiStateId?: number;
  CurPosition: Vector3F.Vector3F;
  Unk1_m?: number;
  SkillLevel: number;
  NewPosition: Vector3F.Vector3F;
  SkillId: number;
  SkillOptionData: SkillOptionData.SkillOptionData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.SourceId = reader.u64();
  data.CurDirectionYaw = Angle.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.AimTargetPosition = Vector3F.read(reader);
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  if (reader.bool()) data.AiStateId = reader.u32();
  data.CurPosition = Vector3F.read(reader);
  if (reader.bool()) data.Unk1_m = reader.i32();
  data.SkillLevel = reader.u8();
  data.NewPosition = Vector3F.read(reader);
  data.SkillId = reader.u32();
  data.SkillOptionData = SkillOptionData.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 16905;
