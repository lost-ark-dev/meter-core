// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillCancelNotify = {
  caster: bigint;
  newPosition: Vector3F.Vector3F;
  newDirectionYaw: Angle.Angle;
  skillId: number;
  cancelReason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  data.caster = reader.u64();
  reader.skip(1);
  data.newPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  data.skillId = reader.u32();
  reader.skip(2);
  data.cancelReason = reader.u8();
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 57929;
