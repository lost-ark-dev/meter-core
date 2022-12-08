import { TypedEmitter } from 'tiny-typed-emitter';
import cap from 'cap';

declare const findDevice: typeof cap.Cap.findDevice;
declare const deviceList: typeof cap.Cap.deviceList;

interface PktCaptureEvents {
    packet: (buf: Buffer) => void;
}
declare class PktCapture extends TypedEmitter<PktCaptureEvents> {
    c: cap.Cap;
    device: string;
    constructor(device: string);
    close(): void;
}
interface PktCaptureAllEvents {
    packet: (buf: Buffer, device: string) => void;
}
declare class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
    caps: Map<string, PktCapture>;
    constructor();
    close(): void;
}

export { PktCapture, PktCaptureAll, deviceList, findDevice };
