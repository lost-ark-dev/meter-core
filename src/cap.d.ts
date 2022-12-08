declare module "cap" {
  import { EventEmitter } from "events";

  export declare class Cap extends EventEmitter {
    open(
      device: string,
      filter: string,
      bufSize: number,
      buffer: Buffer
    ): "NULL" | "ETHERNET" | "IEEE802_11_RADIO" | "LINKTYPE_LINUX_SLL" | "RAW";
    close(): void;
    setMinBytes(nBytes: number): void;
    static findDevice(ip?: string): string | undefined;
    static deviceList(): {
      name: string;
      description?: string;
      addresses: {
        addr?: string;
        netmask?: string;
        broadaddr?: string;
        dstaddr?: string;
      }[];
      flags?: string;
    }[];
  }

  declare function Ethernet(
    b: Buffer,
    offset?: number
  ): {
    info: {
      dstmac: string;
      srcmac: string;
      type?: number;
      vlan?: {
        priority: number;
        CFI: boolean;
        VID: number;
      };
      length?: number;
    };
    offset: number;
  };

  declare function IPV4(
    b: Buffer,
    offset?: number
  ): {
    info: {
      hdrlen: number;
      dscp: number;
      ecn: number;
      totallen: number;
      id: number;
      flags: number;
      fragoffset: number;
      ttl: number;
      protocol: number;
      hdrchecksum: undefined;
      srcaddr: string;
      dstaddr: string;
    };
    offset: number;
    hdrlen: number;
  };

  declare function TCP(
    b: Buffer,
    offset?: number
  ): {
    info: {
      srcport: number;
      dstport: number;
      seqno: number;
      ackno?: number;
      flags: number;
      window: number;
      checksum: number;
      urgentptr?: number;
    };
    hdrlen: number;
    offset: number;
  };

  declare type PROTOCOL = {
    ETHERNET: {
      IPV4: 2048;
    };
    IP: {
      TCP: 6;
    };
  };

  export const decoders = {
    Ethernet,
    IPV4,
    TCP,
    PROTOCOL: {
      ETHERNET: {
        IPV4: 2048,
      },
      IP: {
        TCP: 6,
      },
    },
  };
}
