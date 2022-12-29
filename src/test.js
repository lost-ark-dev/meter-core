const cap = require("cap");
const { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;
function is_sack_in_header(buffer, ip, tcp) {
  if (tcp.hdrlen == 20) return false;
  //Parse TCP Options (//TODO: move to cap/decoders ?)
  let options_offset = ip.offset + 20;
  const options_len = tcp.hdrlen - 20;
  const end_offset = options_offset + options_len;
  while (options_offset < end_offset) {
    switch (buffer[options_offset]) {
      case 0: //end
        options_offset = end_offset;
        break;
      case 1: //pad/nop
        options_offset += 1;
        break;
      case 2: //mss
        options_offset += 4;
        break;
      case 3: //window_scale
        options_offset += 3;
        break;
      case 4: //sack_ok
        options_offset += 2;
        break;
      case 5:
        //We don't need to parse sack, we just want to know that there is
        return true;
      case 8: //timestamp
        options_offset += 10;
        break;
      case 254: //rfc8994
      case 255:
        options_offset += buffer[options_offset + 1] ?? 1;
        break;
      default:
        throw new Error(`Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`); //unknown option drop packet
    }
  }
  return false;
}

const buffer = Buffer.from(
  "9c3426823e80c8d3ff412ca6080045000034374440004006c6aa0a00003536f2fbae3b0f17984f657ab7d9f31d588010040368a000000101080a000b77b66da7d3cb",
  "hex"
);
const eth = Ethernet(buffer);
const ip = IPV4(buffer, eth.offset);
const tcp = TCP(buffer, ip.offset);
is_sack_in_header(buffer, ip, tcp);
