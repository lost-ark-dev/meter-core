import cap from 'cap';
import { TypedEmitter } from 'tiny-typed-emitter';
import { T as TCPTracker, L as ListenOptions } from './ip_tracker-949ff486.js';
import 'stream';

declare const findDevice: typeof cap.Cap.findDevice;
declare const deviceList: typeof cap.Cap.deviceList;

interface IPktCapture {
    tcpTracker: TCPTracker;
    device: string;
    port: number;
    constructor(device: string, port: number): void;
    listen(): void;
    close(): void;
}
interface PktCaptureEvents {
    packet: (buf: Buffer) => void;
}
interface PktCapture extends IPktCapture {
}
declare abstract class PktCapture extends TypedEmitter<PktCaptureEvents> implements IPktCapture {
    tcpTracker: TCPTracker;
    device: string;
    port: number;
    constructor(device: string, listen_options: ListenOptions);
    dispatchPacket(packet: Buffer): void;
}
interface PktCaptureAllEvents {
    packet: (buf: Buffer, deviceName: string) => void;
}
declare enum PktCaptureMode {
    MODE_PCAP = 0,
    MODE_RAW_SOCKET = 1
}
declare class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
    captures: Map<string, PktCapture>;
    constructor(mode: PktCaptureMode, port?: number);
    close(): void;
}
/**
 *
 * @returns False if we have to fall back to pcap, process exit if not, True if already in admin state
 */
declare function adminRelauncher(mode: PktCaptureMode): boolean;

export { PktCaptureAll, PktCaptureMode, adminRelauncher, deviceList, findDevice };
