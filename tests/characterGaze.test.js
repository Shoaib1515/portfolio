import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getGazeOffset,
  normalizeHeadYaw,
  rotateMonitor,
} from "../src/lib/characterGaze.js";

const bounds = { left: 100, top: 100, width: 400, height: 400 };

test("the monitor looks toward the pointer relative to its position", () => {
  assert.deepEqual(getGazeOffset(320, 228, bounds), { x: 0, y: 0 });
  assert.ok(getGazeOffset(0, 228, bounds).x < 0);
  assert.ok(getGazeOffset(800, 228, bounds).x > 0);
  assert.ok(getGazeOffset(320, 0, bounds).y < 0);
  assert.ok(getGazeOffset(320, 900, bounds).y > 0);
});
test("distant pointers cannot over-rotate the monitor", () => {
  assert.deepEqual(getGazeOffset(-10000, 10000, bounds), { x: -1, y: 1 });
  assert.deepEqual(getGazeOffset(10000, -10000, bounds), { x: 1, y: -1 });
  assert.deepEqual(getGazeOffset(100, 100, { ...bounds, width: 0 }), {
    x: 0,
    y: 0,
  });
});

test("head dragging permits complete and repeated 360 degree turns", () => {
  const fullTurn = (Math.PI * 2) / 0.012;
  const once = rotateMonitor(0, 0, fullTurn, 0);
  assert.ok(Math.abs(once.yaw - Math.PI * 2) < 1e-10);
  const twice = rotateMonitor(once.yaw, once.pitch, fullTurn, 0);
  assert.ok(Math.abs(twice.yaw - Math.PI * 4) < 1e-10);
  assert.ok(rotateMonitor(0, 0, -fullTurn, 0).yaw < -6);
  assert.equal(rotateMonitor(0, 0, 0, 10000).pitch, 0.45);
  assert.equal(rotateMonitor(0, 0, 0, -10000).pitch, -0.45);
});

test("releasing full turns preserves the heading without a long rewind", () => {
  for (const turns of [-10, -2, -1, 0, 1, 2, 10]) {
    for (const heading of [-2.8, -0.4, 0, 0.6, 2.8]) {
      const normalized = normalizeHeadYaw(turns * Math.PI * 2 + heading);
      assert.ok(Math.abs(normalized - heading) < 1e-10);
      assert.ok(Math.abs(normalized) <= Math.PI);
    }
  }
});
