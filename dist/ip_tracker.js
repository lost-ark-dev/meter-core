"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ip_tracker.ts
var ip_tracker_exports = {};
__export(ip_tracker_exports, {
  IPTracker: () => IPTracker
});
module.exports = __toCommonJS(ip_tracker_exports);
var import_stream = require("stream");
var MAX_ID = 65536;
var IPTracker = class extends import_stream.EventEmitter {
  next_id = -1;
  stored = {};
  track(packet, ip, tcp) {
    if (this.next_id === -1) {
      this.set_current_id(ip.info.id);
    }
    if (Math.abs(this.next_id - ip.info.id) >= 10) {
      this.increment_id();
    }
    this.stored[ip.info.id] = { packet, ip, tcp };
    if (this.next_id in this.stored) {
      let segment = this.stored[this.next_id];
      while (segment !== void 0) {
        this.emit("segment", segment.packet, segment.ip, segment.tcp);
        delete this.stored[this.next_id];
        this.increment_id();
        segment = this.stored[this.next_id];
      }
    }
    console.log(ip.info.id, this.next_id, ip.info.id === this.next_id, Object.keys(this.stored));
  }
  increment_id() {
    this.next_id = (this.next_id + 1) % MAX_ID;
  }
  set_current_id(current_id) {
    this.next_id = current_id % MAX_ID;
  }
  set_next_id(current_id) {
    this.next_id = (current_id + 1) % MAX_ID;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IPTracker
});
