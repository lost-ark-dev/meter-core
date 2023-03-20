import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/data.ts",
    "src/decompressor.ts",
    "src/ip_tracker.ts",
    "src/legacy-logger.ts",
    "src/packet_buffer.ts",
    "src/partytracker.ts",
    "src/pcidmapper.ts",
    "src/pkt-capture.ts",
    "src/pkt-stream.ts",
    "src/pcidmapper.ts",
    "src/tcp_tracker.ts",
    "src/packets/generated/codes.ts",
    "src/packets/generated/enums.ts",
    "src/packets/generated/mapping.ts",
    "src/packets/generated/names.ts",
    "src/packets/generated/reads.ts",
    "src/packets/generated/types.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  treeshake: "smallest",
});
