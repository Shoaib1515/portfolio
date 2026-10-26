export function getGazeOffset(clientX, clientY, bounds) {
  if (bounds.width <= 0 || bounds.height <= 0) return { x: 0, y: 0 };
  const clamp = (value) => Math.max(-1, Math.min(1, value));
  return {
    x: clamp((clientX - (bounds.left + bounds.width * 0.55)) / bounds.width),
    y: clamp((clientY - (bounds.top + bounds.height * 0.32)) / bounds.height),
  };
}

export function rotateMonitor(yaw, pitch, deltaX, deltaY) {
  return {
    yaw: yaw + deltaX * 0.012,
    pitch: Math.max(-0.45, Math.min(0.45, pitch + deltaY * 0.008)),
  };
}

export function normalizeHeadYaw(yaw) {
  return Math.atan2(Math.sin(yaw), Math.cos(yaw));
}
