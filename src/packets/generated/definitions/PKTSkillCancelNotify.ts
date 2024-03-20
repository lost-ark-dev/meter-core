// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillCancelNotify = {
  skillId: number;
  newDirectionYaw: Angle.Angle;
  cancelReason: number;
  newPosition: Vector3F.Vector3F;
  caster: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  reader.skip(1);
  data.skillId = reader.u32();
  data.newDirectionYaw = Angle.read(reader);
  reader.skip(1);
  data.cancelReason = reader.u8();
  data.newPosition = Vector3F.read(reader);
  data.caster = reader.u64();
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 13094;
