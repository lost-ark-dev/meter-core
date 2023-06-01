import type { Read, Write } from "../../stream";
import type { PKTNewProjectile } from "../../generated/types";
import * as ProjectileInfo from "../structures/ProjectileInfo";
export type NewProjectile = {
  projectileInfo: ProjectileInfo.ProjectileLogInfo;
};
export function read(reader: Read, version: number) {
  const data = {} as NewProjectile;
  data.projectileInfo = ProjectileInfo.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewProjectile | PKTNewProjectile) {
  ProjectileInfo.write(writer, data.projectileInfo);
}

export const name = "NewProjectile";
