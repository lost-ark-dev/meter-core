var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/decompressor.ts
var decompressor_exports = {};
__export(decompressor_exports, {
  Decompressor: () => Decompressor
});
module.exports = __toCommonJS(decompressor_exports);
var import_lz4_napi = require("lz4-napi");
var import_oodle = __toESM(require("oodle"));
var import_snappyjs = require("snappyjs");
var Decompressor = class {
  oodle;
  xorTable;
  constructor(oodle_state, xorTable) {
    this.oodle = new import_oodle.default.Oodle(oodle_state);
    if (xorTable.length != 256)
      throw new Error("Invalid xorTable length");
    this.xorTable = xorTable;
  }
  decrypt(data, xorShift, compression, xor) {
    if (xor)
      this.xor(data, xorShift);
    let out;
    switch (compression) {
      case 0: {
        out = data;
        break;
      }
      case 1: {
        out = (0, import_lz4_napi.uncompressSync)(data);
        break;
      }
      case 2: {
        out = (0, import_snappyjs.uncompress)(data);
        break;
      }
      case 3: {
        if (data.length < 4)
          throw new Error(`Invalid oodle packet: size=${data.length}, comp=${compression}, opcode=${xorShift}`);
        out = this.oodle.decode(data.subarray(4), data.readUInt32LE(0));
        break;
      }
      default:
        throw new Error(`Unknown compression: ${compression}`);
    }
    if (out.length < 16)
      throw new Error(`Invalid packet: size=${out.length}, comp=${compression}, opcode=${xorShift}`);
    return out.subarray(16);
  }
  xor(data, seed) {
    for (let i = 0; i < data.length; i++)
      data[i] ^= this.xorTable[seed++ % 256];
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Decompressor
});
