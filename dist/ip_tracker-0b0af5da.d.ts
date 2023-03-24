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
    state: "NONE" | "ESTAB";
    src?: string;
    dst?: string;
    send_seqno: number;
    send_buffers: TCPSegment[];
    recv_seqno: number;
    recv_buffers: TCPSegment[];
    listen_options: ListenOptions;
    is_ignored: boolean;
    packetBuffer: PacketBuffer;
    send_ip_tracker: IPTracker;
    recv_ip_tracker: IPTracker;
    skip_socks5: number;
    in_handshake: boolean;
    constructor(listen_options: ListenOptions);
    track(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    ESTAB(buffer: Buffer, ip: IPv4, tcp: TCP): void;
    flush_buffers(ackno: number, direction: Direction): void;
    static get_flush(buffers: TCPSegment[], seqno: number, ackno: number): Buffer | null;
    handle_recv_segment(packet: Buffer, ip: IPv4, tcp: TCP): void;
    handle_send_segment(packet: Buffer, ip: IPv4, tcp: TCP): void;
}

type SegmentInfo = {
    packet: Buffer;
    ip: IPv4;
    tcp: TCP;
};
declare class IPTracker extends EventEmitter {
    next_id: number;
    stored: {
        [key: number]: SegmentInfo;
    };
    track(packet: Buffer, ip: IPv4, tcp: TCP): void;
    increment_id(): void;
    set_current_id(current_id: number): void;
    set_next_id(current_id: number): void;
}

export { IPv4 as I, ListenOptions as L, TCPTracker as T, TCP as a, TCPSession as b, IPTracker as c };
