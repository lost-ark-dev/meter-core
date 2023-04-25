import type { Read, Write } from "../stream";

export type SkillMoveOptionData = {
  MoveTime?: number;
  StandUpTime?: number;
  DownTime?: number;
  FreezeTime?: number;
  MoveHeight?: number;
  FarmostDist?: number;
  flag40?: Buffer;
};

export function read(reader: Read, version: number = 0) {
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

export function write(writer: Write, data: SkillMoveOptionData) {
  const flag: number =
    (data.MoveTime === undefined ? 0 : 1 << 0) |
    (data.StandUpTime === undefined ? 0 : 1 << 1) |
    (data.DownTime === undefined ? 0 : 1 << 2) |
    (data.FreezeTime === undefined ? 0 : 1 << 3) |
    (data.MoveHeight === undefined ? 0 : 1 << 4) |
    (data.FarmostDist === undefined ? 0 : 1 << 5) |
    (data.flag40 === undefined ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u32(data.MoveTime);
  if (flag & 2) writer.u32(data.StandUpTime);
  if (flag & 4) writer.u32(data.DownTime);
  if (flag & 8) writer.u32(data.FreezeTime);
  if (flag & 0x10) writer.u32(data.MoveHeight);
  if (flag & 0x20) writer.u32(data.FarmostDist);
  if (flag & 0x40) writer.bytes(data.flag40, { maxLen: 6, lenType: "u16" });
}
