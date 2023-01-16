// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as MoveOptionData from "../../common/MoveOptionData";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  Unk0_m: MoveOptionData.MoveOptionData;
  Unk8_m: number;
  Unk2_m: bigint;
  Destination: Vector3F.Vector3F;
  Unk4_m: number;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  Position: Vector3F.Vector3F;
  Unk3_m: number;
  Unk1_m: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.Unk0_m = MoveOptionData.read(reader);
  data.Unk8_m = reader.u16();
  data.Unk2_m = reader.u64();
  data.Destination = Vector3F.read(reader);
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.Position = Vector3F.read(reader);
  data.Unk3_m = reader.u16();
  data.Unk1_m = reader.u8();
  return data;
}
