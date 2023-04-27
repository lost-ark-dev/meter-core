import type { Read, Write } from "../../stream";
import type { ProjectileInfo } from "../../generated/structures/ProjectileInfo";
import * as TripodIndex from "../../common/TripodIndex";
import * as TripodLevel from "../../common/TripodLevel";
export type ProjectileLogInfo = {
  tripodIndex: TripodIndex.TripodIndex;
  ChainSkillEffect: number;
  SkillEffect: number;
  SkillId: number;
  TargetObjectId: bigint;
  OwnerId: bigint;
  SkillLevel: number;
  ProjectileId: bigint;
  tripodLevel: TripodLevel.TripodLevel;
};
export function read(reader: Read, version: number) {
  const data = {} as ProjectileLogInfo;
  data.tripodIndex = TripodIndex.read(reader, version);
  data.ChainSkillEffect = reader.u32();
  data.SkillEffect = reader.u32();
  data.SkillId = reader.u32();
  data.TargetObjectId = reader.u64();
  data.OwnerId = reader.u64();
  data.SkillLevel = reader.u8();
  data.ProjectileId = reader.u64();
  data.tripodLevel = TripodLevel.read(reader, version);
  return data;
}
export function write(writer: Write, data: ProjectileLogInfo | ProjectileInfo) {
  TripodIndex.write(writer, data.tripodIndex);
  writer.u32(data.ChainSkillEffect);
  writer.u32(data.SkillEffect);
  writer.u32(data.SkillId);
  writer.u64(data.TargetObjectId);
  writer.u64(data.OwnerId);
  writer.u8(data.SkillLevel);
  writer.u64(data.ProjectileId);
  TripodLevel.write(writer, data.tripodLevel);
}
