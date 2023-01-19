import type { Read } from "../stream";

export type SkillMoveOptionData = {
  MoveTime?: number;
  StandUpTime?: number;
  DownTime?: number;
  FreezeTime?: number;
  MoveHeight?: number;
  FarmostDist?: number;
  flag40?: Buffer;
};

export function read(reader: Read) {
  const data: SkillMoveOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.MoveTime = reader.u32();
  if (flag & 2) data.StandUpTime = reader.u32();
  if (flag & 4) data.DownTime = reader.u32();
  if (flag & 8) data.FreezeTime = reader.u32();
  if (flag & 0x10) data.MoveHeight = reader.u32();
  if (flag & 0x20) data.FarmostDist = reader.u32();
  if (flag & 0x40) data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}
