// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  Unk2_m: bigint;
  Unk4_m: number;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  Destination: Vector3F.Vector3F;
  Unk1_m: number;
  Position: Vector3F.Vector3F;
  Unk3_m: number;
  SkillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  Unk8_m: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.Unk2_m = reader.u64();
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.Destination = Vector3F.read(reader);
  data.Unk1_m = reader.u8();
  data.Position = Vector3F.read(reader);
  data.Unk3_m = reader.u16();
  data.SkillMoveOptionData = SkillMoveOptionData.read(reader);
  data.Unk8_m = reader.u16();
  return data;
}
