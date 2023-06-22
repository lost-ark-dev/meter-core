import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/data.ts",
    "src/decompressor.ts",
    "src/pkt-capture.ts",
    "src/pkt-stream.ts",
    "src/logger/data.ts",
    "src/logger/logger.ts",
    "src/logger/parser.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
});
