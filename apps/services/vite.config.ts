/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "~encore": path.resolve(__dirname, "./encore.gen"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  test: {
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html", "lcov", "html-spa"],
    },
  },
});
