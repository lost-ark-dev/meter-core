import type { Read, Write } from "../../stream";
import type { PKTSkillCancelNotify } from "../../generated/types";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";

export type SkillCancelNotify = {
  skillId: number;
  caster: bigint;
  newDirectionYaw: Angle.Angle;
  cancelReason: number;
  newPosition: Vector3F.Vector3F;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillCancelNotify;
  data.skillId = reader.u32();
  data.caster = reader.u64();
  data.newDirectionYaw = Angle.read(reader);
  data.cancelReason = reader.u8();
  data.newPosition = Vector3F.read(reader);
  return data;
}
export function write(writer: Write, data: SkillCancelNotify | PKTSkillCancelNotify) {
  writer.u32(data.skillId);
  writer.u64(data.caster);
  Angle.write(writer, data.newDirectionYaw);
  writer.u8(data.cancelReason);
  Vector3F.write(writer, data.newPosition);
}

export const name = "SkillCancelNotify";
