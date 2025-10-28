import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*.spec.ts",
        "src/**/*.test.ts",
        "src/index.ts", // Re-export file
      ],
    },
    include: ["src/**/*.spec.ts", "tests/**/*.test.ts"],
    typecheck: {
      tsconfig: "./tests/tsconfig.json",
    },
  },
});
