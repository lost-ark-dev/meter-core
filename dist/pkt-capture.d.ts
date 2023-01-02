import cap from 'cap';
import { TypedEmitter } from 'tiny-typed-emitter';

type ListenOptions = {
    ip: string;
    mask: string;
    port: number;
};

declare const findDevice: typeof cap.Cap.findDevice;
declare const deviceList: typeof cap.Cap.deviceList;

interface PktCaptureEvents {
    packet: (buf: Buffer) => void;
}
declare class PktCapture extends TypedEmitter<PktCaptureEvents> {
    #private;
    c: cap.Cap;
    constructor(device: string, listen_options: ListenOptions);
    close(): void;
}
interface PktCaptureAllEvents {
    packet: (buf: Buffer, deviceName: string) => void;
}
declare class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
    caps: Map<string, PktCapture>;
    constructor();
    close(): void;
}

export { PktCapture, PktCaptureAll, deviceList, findDevice };
