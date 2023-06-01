import type { Read, Write } from "../stream";
import * as TripodIndex from "./TripodIndex";
import * as TripodLevel from "./TripodLevel";

export type SkillOptionData = {
  layerIndex?: number;
  startStageIndex?: number;
  transitIndex?: number;
  stageStartTime?: number;
  farmostDistance?: number;
  tripodIndex?: TripodIndex.TripodIndex;
  tripodLevel?: TripodLevel.TripodLevel;
};

export function read(reader: Read, version: number = 0) {
  const data: SkillOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.layerIndex = reader.u8();
  if (flag & 2) data.startStageIndex = reader.u8();
  if (flag & 4) data.transitIndex = reader.u32();
  if (flag & 8) data.stageStartTime = reader.u32();
  if (flag & 0x10) data.farmostDistance = reader.u32();
  if (flag & 0x20) data.tripodIndex = TripodIndex.read(reader);
  if (flag & 0x40) data.tripodLevel = TripodLevel.read(reader);
  return data;
}

export function write(writer: Write, data: SkillOptionData) {
  const flag: number =
    (data.layerIndex === undefined ? 0 : 1 << 0) |
    (data.startStageIndex === undefined ? 0 : 1 << 1) |
    (data.transitIndex === undefined ? 0 : 1 << 2) |
    (data.stageStartTime === undefined ? 0 : 1 << 3) |
    (data.farmostDistance === undefined ? 0 : 1 << 4) |
    (data.tripodIndex === undefined ? 0 : 1 << 5) |
    (data.tripodLevel === undefined ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u8(data.layerIndex);
  if (flag & 2) writer.u8(data.startStageIndex);
  if (flag & 4) writer.u32(data.transitIndex);
  if (flag & 8) writer.u32(data.stageStartTime);
  if (flag & 0x10) writer.u32(data.farmostDistance);
  if (flag & 0x20) TripodIndex.write(writer, data.tripodIndex!);
  if (flag & 0x40) TripodLevel.write(writer, data.tripodLevel!);
}
