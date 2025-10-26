import { describe, it, expect } from "vitest";
import * as path from "path";
import * as fs from "fs";

describe("Package exports", () => {
  const packageJsonPath = path.resolve(__dirname, "../../package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  it("should have exports defined", () => {
    expect(packageJson.exports).toBeDefined();
    expect(typeof packageJson.exports).toBe("object");
  });

  it("should export bundled version as default", () => {
    expect(packageJson.exports["."]).toBeDefined();
    expect(packageJson.exports["."].import.default).toBe(
      "./dist/bundle/index.js",
    );
    expect(packageJson.exports["."].require.default).toBe(
      "./dist/bundle/index.cjs",
    );
  });

  it("should export bundled version explicitly", () => {
    expect(packageJson.exports["./bundle"]).toBeDefined();
    expect(packageJson.exports["./bundle"].import.default).toBe(
      "./dist/bundle/index.js",
    );
    expect(packageJson.exports["./bundle"].require.default).toBe(
      "./dist/bundle/index.cjs",
    );
  });

  it("should export ESM native version", () => {
    expect(packageJson.exports["./esm"]).toBeDefined();
    expect(packageJson.exports["./esm"].default).toBe("./dist/esm/index.js");
    expect(packageJson.exports["./esm"].types).toBe("./dist/esm/index.d.ts");
  });

  it("should export CJS native version", () => {
    expect(packageJson.exports["./cjs"]).toBeDefined();
    expect(packageJson.exports["./cjs"].default).toBe("./dist/cjs/index.js");
    expect(packageJson.exports["./cjs"].types).toBe("./dist/cjs/index.d.ts");
  });

  it("should have all exported files present after build", () => {
    const distPath = path.resolve(__dirname, "../../dist");

    // Check bundled version
    expect(
      fs.existsSync(path.join(distPath, "bundle/index.js")),
    ).toBeTruthy();
    expect(
      fs.existsSync(path.join(distPath, "bundle/index.cjs")),
    ).toBeTruthy();
    expect(
      fs.existsSync(path.join(distPath, "bundle/index.d.ts")),
    ).toBeTruthy();
    expect(
      fs.existsSync(path.join(distPath, "bundle/index.d.cts")),
    ).toBeTruthy();

    // Check ESM native version
    expect(fs.existsSync(path.join(distPath, "esm/index.js"))).toBeTruthy();
    expect(fs.existsSync(path.join(distPath, "esm/index.d.ts"))).toBeTruthy();

    // Check CJS native version
    expect(fs.existsSync(path.join(distPath, "cjs/index.js"))).toBeTruthy();
    expect(fs.existsSync(path.join(distPath, "cjs/index.d.ts"))).toBeTruthy();
  });

  it("should have main field pointing to bundled CJS", () => {
    expect(packageJson.main).toBe("./dist/bundle/index.cjs");
  });

  it("should have module field pointing to bundled ESM", () => {
    expect(packageJson.module).toBe("./dist/bundle/index.js");
  });

  it("should have types field pointing to bundled types", () => {
    expect(packageJson.types).toBe("./dist/bundle/index.d.ts");
  });
});
