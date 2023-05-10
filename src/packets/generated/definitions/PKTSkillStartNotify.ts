// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  SkillId: number;
  NewPosition: Vector3F.Vector3F;
  CurDirectionYaw: Angle.Angle;
  Unk1_m?: number;
  SkillLevel: number;
  PitchRotation?: Angle.Angle;
  SkillOptionData: SkillOptionData.SkillOptionData;
  NewDirectionYaw: Angle.Angle;
  SourceId: bigint;
  AiStateId?: number;
  AimTargetPosition: Vector3F.Vector3F;
  CurPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.SkillId = reader.u32();
  data.NewPosition = Vector3F.read(reader);
  data.CurDirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk1_m = reader.u32();
  data.SkillLevel = reader.u8();
  if (reader.bool()) data.PitchRotation = Angle.read(reader);
  data.SkillOptionData = SkillOptionData.read(reader);
  data.NewDirectionYaw = Angle.read(reader);
  data.SourceId = reader.u64();
  if (reader.bool()) data.AiStateId = reader.u32();
  data.AimTargetPosition = Vector3F.read(reader);
  data.CurPosition = Vector3F.read(reader);
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 52727;
