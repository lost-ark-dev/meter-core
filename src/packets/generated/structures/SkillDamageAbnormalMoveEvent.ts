// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  unk8_m: number;
  unk3_m: number;
  destination: Vector3F.Vector3F;
  unk1_m: number;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  position: Vector3F.Vector3F;
  skillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  unk2_m: bigint;
  unk4_m: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.unk8_m = reader.u16();
  data.unk3_m = reader.u16();
  data.destination = Vector3F.read(reader);
  data.unk1_m = reader.u8();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.position = Vector3F.read(reader);
  data.skillMoveOptionData = SkillMoveOptionData.read(reader);
  data.unk2_m = reader.u64();
  data.unk4_m = reader.u16();
  return data;
}
