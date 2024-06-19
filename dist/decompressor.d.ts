import oodle from 'oodle';

declare class Decompressor {
    oodle: oodle.Oodle;
    xorTable?: Buffer;
    constructor(oodle_state: Buffer);
    decrypt(data: Buffer, xorShift: number, compression: number, xor: boolean): Buffer;
    xor(data: Buffer, seed: number): void;
}

export { Decompressor };
