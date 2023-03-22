// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  AiStateId?: number;
  AimTargetPosition: Vector3F.Vector3F;
  CurDirectionYaw: Angle.Angle;
  SkillLevel: number;
  CurPosition: Vector3F.Vector3F;
  NewDirectionYaw: Angle.Angle;
  NewPosition: Vector3F.Vector3F;
  PitchRotation?: Angle.Angle;
  Unk1_m?: number;
  SourceId: bigint;
  SkillOptionData: SkillOptionData.SkillOptionData;
  SkillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  if (reader.bool()) data.AiStateId = reader.u32();
  data.AimTargetPosition = Vector3F.read(reader);
  data.CurDirectionYaw = Angle.read(reader);
  data.SkillLevel = reader.u8();
  data.CurPosition = Vector3F.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.NewPosition = Vector3F.read(reader);
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  if (reader.bool()) data.Unk1_m = reader.i32();
  data.SourceId = reader.u64();
  data.SkillOptionData = SkillOptionData.read(reader);
  data.SkillId = reader.u32();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 12114;
