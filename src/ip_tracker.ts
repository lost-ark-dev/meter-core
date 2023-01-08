import { EventEmitter } from "stream";
import type { IPv4, TCP } from "./tcp_tracker";

const MAX_ID = 65536;

type SegmentInfo = {
  packet: Buffer;
  ip: IPv4;
  tcp: TCP;
};

export class IPTracker extends EventEmitter {
  next_id = -1;
  stored: { [key: number]: SegmentInfo } = {};
  track(packet: Buffer, ip: IPv4, tcp: TCP) {
    //We guess current id
    if (this.next_id === -1) {
      this.set_current_id(ip.info.id);
    }
    //If the id we just got is too far from the next_id expected, then we increment next_id by 1
    if (Math.abs(this.next_id - ip.info.id) >= 10) {
      this.increment_id();
    }
    if (ip.info.id === this.next_id) {
      //We got the next segment, dispatch instantly
      this.emit("segment", packet, ip, tcp);
      //we just got a new segment, try to push every other segments stored
      this.increment_id();
      let segment = this.stored[this.next_id];
      while (segment !== undefined) {
        this.emit("segment", segment.packet, segment.ip, segment.tcp);
        this.increment_id();
        segment = this.stored[this.next_id];
      }
    } else {
      //We got the wrong id, store it
      this.stored[ip.info.id] = { packet, ip, tcp }; // We may delete old ip if we get the same id, but it should be better like that if it happens
    }
  }
  increment_id() {
    this.next_id = (this.next_id + 1) % MAX_ID;
  }
  set_current_id(current_id: number) {
    this.next_id = current_id % MAX_ID;
  }
  set_next_id(current_id: number) {
    this.next_id = (current_id + 1) % MAX_ID;
  }
}
