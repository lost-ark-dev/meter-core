// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  Unk1_m: number;
  Unk2_m: bigint;
  SkillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  Unk4_m: number;
  Unk8_m: number;
  Destination: Vector3F.Vector3F;
  Unk3_m: number;
  Position: Vector3F.Vector3F;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.Unk1_m = reader.u8();
  data.Unk2_m = reader.u64();
  data.SkillMoveOptionData = SkillMoveOptionData.read(reader);
  data.Unk4_m = reader.u16();
  data.Unk8_m = reader.u16();
  data.Destination = Vector3F.read(reader);
  data.Unk3_m = reader.u16();
  data.Position = Vector3F.read(reader);
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  return data;
}
