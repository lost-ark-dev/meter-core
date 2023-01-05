import { EventEmitter } from 'stream';

declare class PacketBuffer {
    buffer: Buffer | null;
    position: number;
    out: Buffer[];
    constructor();
    write(data: Buffer): void;
    read(): Buffer | undefined;
}

type IPv4 = {
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
type TCP = {
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
type Direction = "send" | "recv";
type ListenOptions = {
    ip: string;
    mask: string;
    port: number;
};
declare class TCPTracker extends EventEmitter {
    sessions: {
        [key: string]: TCPSession;
    };
    listen_options: ListenOptions;
    constructor(listen_options: ListenOptions);
    track_packet(buffer: Buffer, ip: IPv4, tcp: TCP): void;
}
type TCPSegment = {
    seqno: number;
    payload: Buffer;
};
declare class TCPSession extends EventEmitter {
    state: "NONE" | "SYN_SENT" | "SYN_RCVD" | "ESTAB" | "FIN_WAIT" | "CLOSE_WAIT" | "LAST_ACK" | "CLOSING" | "CLOSED";
    src?: string;
    dst?: string;
    send_seqno: number;
    send_buffers: TCPSegment[];
    recv_seqno: number;
    recv_buffers: TCPSegment[];
    listen_options: ListenOptions;
    is_ignored: boolean;
    packetBuffer: PacketBuffer;
    constructor(listen_options: ListenOptions);
    track(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    SYN_SENT(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    SYN_RCVD(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    ESTAB(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    FIN_WAIT(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    CLOSE_WAIT(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    LAST_ACK(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    CLOSING(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    CLOSED(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    flush_buffers(ackno: number, direction: Direction): void;
    get_flush(buffers: TCPSegment[], seqno: number, ackno: number): Buffer | null;
}

export { ListenOptions, TCPSession, TCPTracker };
