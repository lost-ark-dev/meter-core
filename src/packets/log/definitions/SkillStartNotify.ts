import type { Read, Write } from "../../stream";
import type { PKTSkillStartNotify } from "../../generated/types";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as SkillOptionData from "../../common/SkillOptionData";

export type SkillStartNotify = {
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
export function read(reader: Read, version: number) {
  const data = {} as SkillStartNotify;
  data.SourceId = reader.u64();
  data.CurDirectionYaw = Angle.read(reader, version);
  data.NewDirectionYaw = Angle.read(reader, version);
  data.AimTargetPosition = Vector3F.read(reader, version);
  if (reader.bool()) data.PitchRotation = Angle.read(reader, version);
  if (reader.bool()) data.AiStateId = reader.u32();
  data.CurPosition = Vector3F.read(reader, version);
  if (reader.bool()) data.Unk1_m = reader.u32();
  data.SkillLevel = reader.u8();
  data.NewPosition = Vector3F.read(reader, version);
  data.SkillId = reader.u32();
  data.SkillOptionData = SkillOptionData.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillStartNotify | PKTSkillStartNotify) {
  writer.u64(data.SourceId);
  Angle.write(writer, data.CurDirectionYaw);
  Angle.write(writer, data.NewDirectionYaw);
  Vector3F.write(writer, data.AimTargetPosition);
  if (writer.bool(data.PitchRotation !== undefined)) Angle.write(writer, data.PitchRotation);
  if (writer.bool(data.AiStateId !== undefined)) writer.u32(data.AiStateId);
  Vector3F.write(writer, data.CurPosition);
  if (writer.bool(data.Unk1_m !== undefined)) writer.u32(data.Unk1_m);
  writer.u8(data.SkillLevel);
  Vector3F.write(writer, data.NewPosition);
  writer.u32(data.SkillId);
  SkillOptionData.write(writer, data.SkillOptionData);
}

export const logId = 32;
export const name = "SkillStartNotify";
