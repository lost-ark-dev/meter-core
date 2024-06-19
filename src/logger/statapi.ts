import { EntityTracker } from "./entityTracker";
import { LiveLogger } from "./logger";
import { CharacterExportInfo } from "../packets/common/api";

export class StatApi {
  ip?: string;
  zoneSyncStatus = ZoneSyncStatus.INVALID;
  cache = new Map<string, PlayerStatCache>();

  constructor(entityTracker: EntityTracker, clientId: string, logger: LiveLogger | undefined) {}
  updatePlayerStats(players: CharacterExportInfo[]) {
    players.forEach((p) => {
      //console.log("Updated base stats: ", p);
      const playerCache = this.cache.get(p.name);
      if (playerCache) {
        // Update cache values
        playerCache.info = p;
        playerCache.status = PlayerStatCacheStatus.VALID;
      } else {
        this.cache.set(p.name, {
          hash: "", //We're in replay, hash isn't used
          status: PlayerStatCacheStatus.VALID,
          info: p,
        });
      }
    });
  }
  getStats(name: string) {
    if (!this.isCurrentZoneValid()) return;
    const c = this.cache.get(name);
    if (c && c.status === PlayerStatCacheStatus.VALID) return c.info.stats;
    return;
  }
  isCurrentZoneValid() {
    return (
      this.zoneSyncStatus !== ZoneSyncStatus.INVALID &&
      (this.zoneSyncStatus & (ZoneSyncStatus.ZONE_INVALID | ZoneSyncStatus.RAID_INVALID)) === 0
    );
  }
  //TODO add a way to reset ?
}

export type PlayerStatCache = {
  hash: string;
  status: PlayerStatCacheStatus;
  info: CharacterExportInfo;
};
export enum PlayerStatCacheStatus {
  INVALID,
  PENDING,
  VALID,
}

export enum ZoneSyncStatus {
  INVALID = 0,
  ZONE_INVALID = 1 << 1,
  ZONE_VALID = 1 << 2,
  RAID_INVALID = 1 << 3,
  RAID_VALID = 1 << 4,
}
