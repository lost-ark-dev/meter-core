// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillCancelNotify = {
  newPosition: Vector3F.Vector3F;
  skillId: number;
  cancelReason: number;
  caster: bigint;
  newDirectionYaw: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  data.newPosition = Vector3F.read(reader);
  reader.skip(1);
  data.skillId = reader.u32();
  data.cancelReason = reader.u8();
  data.caster = reader.u64();
  data.newDirectionYaw = Angle.read(reader);
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 31252;
