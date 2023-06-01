import type { Read, Write } from "../stream";

export type SkillMoveOptionData = {
  moveTime?: number;
  standUpTime?: number;
  downTime?: number;
  freezeTime?: number;
  moveHeight?: number;
  farmostDist?: number;
  flag40?: Buffer;
};

export function read(reader: Read, version: number = 0) {
  const data: SkillMoveOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.moveTime = reader.u32();
  if (flag & 2) data.standUpTime = reader.u32();
  if (flag & 4) data.downTime = reader.u32();
  if (flag & 8) data.freezeTime = reader.u32();
  if (flag & 0x10) data.moveHeight = reader.u32();
  if (flag & 0x20) data.farmostDist = reader.u32();
  if (flag & 0x40) data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}

export function write(writer: Write, data: SkillMoveOptionData) {
  const flag: number =
    (data.moveTime === undefined ? 0 : 1 << 0) |
    (data.standUpTime === undefined ? 0 : 1 << 1) |
    (data.downTime === undefined ? 0 : 1 << 2) |
    (data.freezeTime === undefined ? 0 : 1 << 3) |
    (data.moveHeight === undefined ? 0 : 1 << 4) |
    (data.farmostDist === undefined ? 0 : 1 << 5) |
    (data.flag40 === undefined ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u32(data.moveTime);
  if (flag & 2) writer.u32(data.standUpTime);
  if (flag & 4) writer.u32(data.downTime);
  if (flag & 8) writer.u32(data.freezeTime);
  if (flag & 0x10) writer.u32(data.moveHeight);
  if (flag & 0x20) writer.u32(data.farmostDist);
  if (flag & 0x40) writer.bytes(data.flag40, { maxLen: 6, lenType: "u16" });
}
