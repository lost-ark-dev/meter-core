// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillCancelNotify = {
  skillId: number;
  newDirectionYaw: Angle.Angle;
  cancelReason: number;
  caster: bigint;
  newPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  reader.skip(1);
  data.skillId = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  data.cancelReason = reader.u8();
  data.caster = reader.u64();
  reader.skip(1);
  data.newPosition = Vector3F.read(reader);
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 54544;
