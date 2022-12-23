declare module "snappyjs" {
  export function compress(uncompressed: Buffer): Buffer;
  export function compress(uncompressed: Uint8Array): Uint8Array;
  export function compress(uncompressed: ArrayBuffer): ArrayBuffer;
  export function uncompress(compressed: Buffer, maxLength?: number): Buffer;
  export function uncompress(compressed: Uint8Array, maxLength?: number): Uint8Array;
  export function uncompress(compressed: ArrayBuffer, maxLength?: number): ArrayBuffer;
}
