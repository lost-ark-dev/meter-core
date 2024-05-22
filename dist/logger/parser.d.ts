import { TypedEmitter } from 'tiny-typed-emitter';
import { M as MeterData, G as GameTrackerOptions, a as GameState } from '../data-b0258b3d.js';
import { Logger } from './logger.js';
import '../decompressor.js';
import 'oodle';
import '../pkt-stream-5aeaa2cc.js';

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
