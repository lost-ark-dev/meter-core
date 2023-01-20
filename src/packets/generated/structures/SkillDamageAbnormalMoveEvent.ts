// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  Unk4_m: number;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  Position: Vector3F.Vector3F;
  Unk8_m: number;
  Unk1_m: number;
  Destination: Vector3F.Vector3F;
  SkillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  Unk3_m: number;
  Unk2_m: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.Position = Vector3F.read(reader);
  data.Unk8_m = reader.u16();
  data.Unk1_m = reader.u8();
  data.Destination = Vector3F.read(reader);
  data.SkillMoveOptionData = SkillMoveOptionData.read(reader);
  data.Unk3_m = reader.u16();
  data.Unk2_m = reader.u64();
  return data;
}
