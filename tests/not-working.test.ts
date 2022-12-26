import { expect, test, vi } from "vitest";
import x from "../src/index.js";

vi.mock("../src/b.js");

test("default import", async () => {
  const result = x();
  expect(result).toBe(undefined);
});
