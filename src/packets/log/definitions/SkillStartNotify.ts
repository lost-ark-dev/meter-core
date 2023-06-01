import type { Read, Write } from "../../stream";
import type { PKTSkillStartNotify } from "../../generated/types";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as SkillOptionData from "../../common/SkillOptionData";

export type SkillStartNotify = {
  sourceId: bigint;
  curDirectionYaw: Angle.Angle;
  newDirectionYaw: Angle.Angle;
  aimTargetPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  aiStateId?: number;
  curPosition: Vector3F.Vector3F;
  unk1_m?: number;
  skillLevel: number;
  newPosition: Vector3F.Vector3F;
  skillId: number;
  skillOptionData: SkillOptionData.SkillOptionData;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillStartNotify;
  data.sourceId = reader.u64();
  data.curDirectionYaw = Angle.read(reader, version);
  data.newDirectionYaw = Angle.read(reader, version);
  data.aimTargetPosition = Vector3F.read(reader, version);
  if (reader.bool()) data.pitchRotation = Angle.read(reader, version);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.curPosition = Vector3F.read(reader, version);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  data.newPosition = Vector3F.read(reader, version);
  data.skillId = reader.u32();
  data.skillOptionData = SkillOptionData.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillStartNotify | PKTSkillStartNotify) {
  writer.u64(data.sourceId);
  Angle.write(writer, data.curDirectionYaw);
  Angle.write(writer, data.newDirectionYaw);
  Vector3F.write(writer, data.aimTargetPosition);
  if (writer.bool(data.pitchRotation !== undefined)) Angle.write(writer, data.pitchRotation);
  if (writer.bool(data.aiStateId !== undefined)) writer.u32(data.aiStateId);
  Vector3F.write(writer, data.curPosition);
  if (writer.bool(data.unk1_m !== undefined)) writer.u32(data.unk1_m);
  writer.u8(data.skillLevel);
  Vector3F.write(writer, data.newPosition);
  writer.u32(data.skillId);
  SkillOptionData.write(writer, data.skillOptionData);
}

export const name = "SkillStartNotify";
