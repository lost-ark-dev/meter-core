const { PktCaptureAll, PktCaptureMode } = require("meter-core/pkt-capture");
const capture = new PktCaptureAll(PktCaptureMode.MODE_RAW_SOCKET);
capture.on("packet", (buf) => {
  console.log(buf.toString("hex"));
});
