import type { Read } from "../stream";

/**
 * Apply sign to a 21bit unsigned integer
 */
function i21(n: number) {
  if (n >> 20 === 1) return -(((~n >>> 0) + 1) & 0x1fffff); // 2's compelement
  return n;
}

export type Vector3F = {
  x?: number;
  y?: number;
  z?: number;
};

export function read(reader: Read): Vector3F {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number((b >> 21n) & 0x1fffffn)),
    z: i21(Number((b >> 42n) & 0x1fffffn)),
  };
}
