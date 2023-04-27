import type { Read, Write } from "../stream";
import * as TripodIndex from "./TripodIndex";
import * as TripodLevel from "./TripodLevel";

export type SkillOptionData = {
  LayerIndex?: number;
  StartStageIndex?: number;
  TransitIndex?: number;
  StageStartTime?: number;
  FarmostDistance?: number;
  TripodIndex?: TripodIndex.TripodIndex;
  TripodLevel?: TripodLevel.TripodLevel;
};

export function read(reader: Read, version: number = 0) {
  const data: SkillOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.LayerIndex = reader.u8();
  if (flag & 2) data.StartStageIndex = reader.u8();
  if (flag & 4) data.TransitIndex = reader.u32();
  if (flag & 8) data.StageStartTime = reader.u32();
  if (flag & 0x10) data.FarmostDistance = reader.u32();
  if (flag & 0x20) data.TripodIndex = TripodIndex.read(reader);
  if (flag & 0x40) data.TripodLevel = TripodLevel.read(reader);
  return data;
}

export function write(writer: Write, data: SkillOptionData) {
  const flag: number =
    (data.LayerIndex === undefined ? 0 : 1 << 0) |
    (data.StartStageIndex === undefined ? 0 : 1 << 1) |
    (data.TransitIndex === undefined ? 0 : 1 << 2) |
    (data.StageStartTime === undefined ? 0 : 1 << 3) |
    (data.FarmostDistance === undefined ? 0 : 1 << 4) |
    (data.TripodIndex === undefined ? 0 : 1 << 5) |
    (data.TripodLevel === undefined ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u8(data.LayerIndex);
  if (flag & 2) writer.u8(data.StartStageIndex);
  if (flag & 4) writer.u32(data.TransitIndex);
  if (flag & 8) writer.u32(data.StageStartTime);
  if (flag & 0x10) writer.u32(data.FarmostDistance);
  if (flag & 0x20) TripodIndex.write(writer, data.TripodIndex!);
  if (flag & 0x40) TripodLevel.write(writer, data.TripodLevel!);
}
