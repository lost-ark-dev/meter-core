// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
export type PKTSkillCancelNotify = {
  skillId: number;
  caster: bigint;
  newDirectionYaw: Angle.Angle;
  cancelReason: number;
  newPosition: Vector3F.Vector3F;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  data.skillId = reader.u32();
  data.caster = reader.u64();
  data.newDirectionYaw = Angle.read(reader);
  data.cancelReason = reader.u8();
  reader.skip(1);
  data.newPosition = Vector3F.read(reader);
  reader.skip(1);
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 16510;
