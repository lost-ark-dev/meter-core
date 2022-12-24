import cap from 'cap';
import { TypedEmitter } from 'tiny-typed-emitter';

declare const findDevice: typeof cap.Cap.findDevice;
declare const deviceList: typeof cap.Cap.deviceList;

interface PktCaptureEvents {
    packet: (buf: Buffer) => void;
}
declare class PktCapture extends TypedEmitter<PktCaptureEvents> {
    c: cap.Cap;
    buffer: Buffer;
    constructor(device: string);
    close(): void;
}
interface PktCaptureAllEvents {
    packet: (buf: Buffer, deviceName: string) => void;
}
declare class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
    caps: Map<string, PktCapture>;
    constructor(logerror: (message: any, ...optionalParams: any[]) => void);
    close(): void;
}

export { PktCapture, PktCaptureAll, deviceList, findDevice };
