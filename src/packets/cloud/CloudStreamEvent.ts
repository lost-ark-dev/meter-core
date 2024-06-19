import { ConnState } from "../../logger/cloudConnection";
import type { CloudPKT } from "./CloudPKT";
import type * as types from "./types";
export interface CloudStreamEvent {
  CC_Auth: (pkt: CloudPKT<types.CC_Auth>) => void;
  CS_Auth: (pkt: CloudPKT<types.CS_Auth>) => void;
  CC_Data: (pkt: CloudPKT<types.CC_Data>) => void;
  CS_Data: (pkt: CloudPKT<types.CS_Data>) => void;
  CC_Logout: (pkt: CloudPKT<types.CC_Logout>) => void;
  CC_OnConnect: (pkt: CloudPKT<types.CC_OnConnect>) => void;
  CS_Error: (pkt: CloudPKT<types.CS_Error>) => void;
  CCS_PingPong: (pkt: CloudPKT<types.CCS_PingPong>) => void;

  CS_SyncDmg: (pkt: CloudPKT<types.CS_SyncDmg>) => void;
  CS_SyncZone: (pkt: CloudPKT<types.CS_SyncZone>) => void;

  authState: (state: ConnState) => void;

  "*": (name: string, pkt: CloudPKT<Object>) => void;
}
