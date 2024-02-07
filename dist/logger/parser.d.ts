import { TypedEmitter } from 'tiny-typed-emitter';
import { M as MeterData, G as GameTrackerOptions, a as GameState } from '../data-765165e9.js';
import { Logger } from './logger.js';
import '../decompressor.js';
import 'oodle';
import '../pkt-stream-9a1c3d45.js';

declare class Parser extends TypedEmitter<ParserEvent> {
    #private;
    constructor(logger: Logger, data: MeterData, clientId: string, options: Partial<GameTrackerOptions>);
    broadcastStateChange(): void;
    reset(): void;
    cancelReset(): void;
    updateOptions(options: Partial<GameTrackerOptions>): void;
    onConnect(ip: string): void;
    get encounters(): GameState[];
}
interface ParserEvent {
    log: (data: {
        type: "debug" | "error";
        message: string;
    }) => void;
    message: (msg: string) => void;
    "reset-state": (game: GameState) => void;
    "state-change": (game: GameState) => void;
}

export { Parser, ParserEvent };
