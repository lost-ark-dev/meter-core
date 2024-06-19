import { cloudId } from "./cloudIds";
import * as names from "./names";
import * as reads from "./reads";
import * as writes from "./writes";
import type { Read, Write } from "../stream";
export const cloudMapping = new Map<number, [string, (reader: Read) => any, (writer: Write, data: any) => any]>([
  [cloudId.CC_Auth, [names.CC_Auth, reads.CC_Auth, writes.CC_Auth]],
  [cloudId.CS_Auth, [names.CS_Auth, reads.CS_Auth, writes.CS_Auth]],
  [cloudId.CC_Data, [names.CC_Data, reads.CC_Data, writes.CC_Data]],
  [cloudId.CS_Data, [names.CS_Data, reads.CS_Data, writes.CS_Data]],
  [cloudId.CC_Logout, [names.CC_Logout, reads.CC_Logout, writes.CC_Logout]],
  [cloudId.CC_OnConnect, [names.CC_OnConnect, reads.CC_OnConnect, writes.CC_OnConnect]],

  [cloudId.CS_SyncDmg, [names.CS_SyncDmg, reads.CS_SyncDmg, writes.CS_SyncDmg]],
  [cloudId.CS_SyncZone, [names.CS_SyncZone, reads.CS_SyncZone, writes.CS_SyncZone]],

  [cloudId.CS_Error, [names.CS_Error, reads.CS_Error, writes.CS_Error]],
  [cloudId.CCS_PingPong, [names.CCS_PingPong, reads.CCS_PingPong, writes.CCS_PingPong]],
]);
