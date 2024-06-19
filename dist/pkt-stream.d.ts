import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';
import 'oodle';

interface PKTStreamEvent {
    "*": (data: Buffer, opcode: number, compression: number, xor: boolean) => void;
}
declare class PKTStream extends TypedEmitter<PKTStreamEvent> {
    #private;
    constructor(decompressor: Decompressor);
    /**
     * @returns `false` if packet is malformed
     */
    read(buf: Buffer): false | void;
}
declare class PKT<T> {
    #private;
    constructor(data: Buffer, opcode: number, compression: number, xor: boolean, decompressor: Decompressor, read: (buf: Buffer) => T);
    get parsed(): T | undefined;
}

export { PKT, PKTStream };
