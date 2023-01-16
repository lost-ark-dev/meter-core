import { EventEmitter } from "stream";
import type { IPv4, TCP } from "./tcp_tracker";

const MAX_ID = 65536;

type SegmentInfo = {
  packet: Buffer;
  ip: IPv4;
  tcp: TCP;
};

/*
TCP reordering might be usefull to use later,
but currently it breaks how we decide to push packets.

If we find a gap (or unordered packet), but not the other direction,
we may receive an ack in the other direction that'll get us to drop our packets
*/
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
    this.stored[ip.info.id] = { packet, ip, tcp }; // We may delete old ip if we get the same id, but it should be better like that if it happens

    if (this.next_id in this.stored) {
      let segment = this.stored[this.next_id];
      while (segment !== undefined) {
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
  set_current_id(current_id: number) {
    this.next_id = current_id % MAX_ID;
  }
  set_next_id(current_id: number) {
    this.next_id = (current_id + 1) % MAX_ID;
  }
}
