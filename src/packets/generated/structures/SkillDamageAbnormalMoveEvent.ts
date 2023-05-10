// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  Unk8_m: number;
  Position: Vector3F.Vector3F;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  Unk4_m: number;
  Unk2_m: bigint;
  Unk3_m: number;
  SkillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  Unk1_m: number;
  Destination: Vector3F.Vector3F;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.Unk8_m = reader.u16();
  data.Position = Vector3F.read(reader);
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.Unk4_m = reader.u16();
  data.Unk2_m = reader.u64();
  data.Unk3_m = reader.u16();
  data.SkillMoveOptionData = SkillMoveOptionData.read(reader);
  data.Unk1_m = reader.u8();
  data.Destination = Vector3F.read(reader);
  return data;
}
