import type * as types from "./types";
export type CloudPKTType = {
  CC_Auth: types.CC_Auth;
  CS_Auth: types.CS_Auth;
  CC_Data: types.CC_Data;
  CS_Data: types.CS_Data;
  CC_Logout: types.CC_Logout;
  CC_OnConnect: types.CC_OnConnect;

  CS_SyncDmg: types.CS_SyncDmg;
  CS_SyncZone: types.CS_SyncZone;

  CS_Error: types.CS_Error;
  CCS_PingPong: types.CCS_PingPong;
};
