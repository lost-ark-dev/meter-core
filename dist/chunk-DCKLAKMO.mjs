// src/ip_tracker.ts
import { EventEmitter } from "stream";
var MAX_ID = 65536;
var IPTracker = class extends EventEmitter {
  next_id = -1;
  stored = {};
  track(packet, ip, tcp) {
    if (this.next_id === -1) {
      this.set_current_id(ip.info.id);
    }
    if (Math.abs(this.next_id - ip.info.id) >= 10) {
      this.increment_id();
    }
    if (ip.info.id === this.next_id) {
      this.emit("segment", packet, ip, tcp);
      this.increment_id();
      let segment = this.stored[this.next_id];
      while (segment !== void 0) {
        this.emit("segment", segment.packet, segment.ip, segment.tcp);
        this.increment_id();
        segment = this.stored[this.next_id];
      }
    } else {
      this.stored[ip.info.id] = { packet, ip, tcp };
    }
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

export {
  IPTracker
};
