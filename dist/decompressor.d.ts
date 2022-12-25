import oodle from 'oodle';

declare class Decompressor {
    oodle: oodle.Oodle;
    xorTable: Buffer;
    logErrorFunc: (arg?: any, ...args: any[]) => void;
    constructor(oodle_state: Buffer, xorTable: Buffer, logErrorFunc: (arg?: any, ...args: any[]) => void);
    decrypt(data: Buffer, xorShift: number, compression: number, xor: boolean): Buffer;
    xor(data: Buffer, seed: number): void;
}

export { Decompressor };
