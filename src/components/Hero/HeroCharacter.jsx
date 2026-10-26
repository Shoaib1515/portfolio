"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  getGazeOffset,
  normalizeHeadYaw,
  rotateMonitor,
} from "@/lib/characterGaze";
import { createMonitorHead } from "./createMonitorHead";

export default function HeroCharacter() {
  const frameRef = useRef(null);
  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let model;
    try {
      model = createMonitorHead(canvasRef.current);
    } catch {
      return;
    }
    let animationFrame = 0;
    let contextLost = false;
    let target = { yaw: 0, pitch: 0 };
    let dragging = null;
    let manual = false;
    function render() {
      animationFrame = 0;
      model.head.rotation.y += (target.yaw - model.head.rotation.y) * 0.18;
      model.head.rotation.x += (target.pitch - model.head.rotation.x) * 0.18;
      model.render();
      canvasRef.current.dataset.yaw = model.head.rotation.y.toFixed(3);
      if (
        Math.abs(target.yaw - model.head.rotation.y) +
          Math.abs(target.pitch - model.head.rotation.x) >
        0.001
      )
        requestRender();
    }
    function requestRender() {
      if (!contextLost && !animationFrame)
        animationFrame = requestAnimationFrame(render);
    }
    function reset() {
      manual = false;
      dragging = null;
      delete frame.dataset.dragging;
      target = { yaw: 0, pitch: 0 };
      model.setEyes();
      if (reducedMotion.matches) {
        model.head.rotation.x = 0;
        model.head.rotation.y = 0;
      }
      requestRender();
    }
    function onMove(event) {
      if (reducedMotion.matches) return;
      if (dragging && dragging.id === event.pointerId) {
        target = rotateMonitor(
          target.yaw,
          target.pitch,
          event.clientX - dragging.x,
          event.clientY - dragging.y,
        );
        dragging = { id: event.pointerId, x: event.clientX, y: event.clientY };
        requestRender();
        return;
      }
      if (manual || !finePointer.matches || event.pointerType !== "mouse")
        return;
      const bounds = frame.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const gaze = getGazeOffset(event.clientX, event.clientY, bounds);
      target = { yaw: gaze.x * 0.45, pitch: gaze.y * 0.16 };
      model.setEyes(gaze.x, gaze.y);
      requestRender();
    }
    function onDown(event) {
      if (
        reducedMotion.matches ||
        (event.pointerType === "mouse" && event.button !== 0)
      )
        return;
      manual = true;
      dragging = { id: event.pointerId, x: event.clientX, y: event.clientY };
      viewport.setPointerCapture(event.pointerId);
      frame.dataset.dragging = "true";
    }
    function onUp(event) {
      if (!dragging || event.pointerId !== dragging.id) return;
      dragging = null;
      manual = false;
      delete frame.dataset.dragging;
      if (event.type !== "pointerup") {
        reset();
        return;
      }
      if (event.pointerType === "mouse" && finePointer.matches) {
        // Preserve the visible heading without unwinding completed turns.
        model.head.rotation.y = normalizeHeadYaw(model.head.rotation.y);
        onMove(event);
      }
    }
    function onKey(event) {
      if (reducedMotion.matches) return;
      if (event.key === "Home" || event.key === "Escape") {
        event.preventDefault();
        reset();
        return;
      }
      const directions = {
        ArrowLeft: [-Math.PI / 8, 0],
        ArrowRight: [Math.PI / 8, 0],
        ArrowUp: [0, -0.1],
        ArrowDown: [0, 0.1],
      };
      const direction = directions[event.key];
      if (!direction) return;
      event.preventDefault();
      manual = true;
      target = {
        yaw: target.yaw + direction[0],
        pitch: Math.max(-0.45, Math.min(0.45, target.pitch + direction[1])),
      };
      requestRender();
    }
    function resize() {
      if (viewport.clientWidth > 0 && viewport.clientHeight > 0) {
        model.resize(viewport.clientWidth, viewport.clientHeight);
        requestRender();
      }
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(viewport);
    resize();
    model.render();
    stage.dataset.ready = "true";
    function onContextLost(event) {
      event.preventDefault();
      contextLost = true;
      delete stage.dataset.ready;
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", reset);
    viewport.addEventListener("pointerdown", onDown);
    viewport.addEventListener("pointerup", onUp);
    viewport.addEventListener("pointercancel", onUp);
    viewport.addEventListener("lostpointercapture", onUp);
    frame.addEventListener("keydown", onKey);
    reducedMotion.addEventListener("change", reset);
    canvasRef.current.addEventListener("webglcontextlost", onContextLost);
    const canvas = canvasRef.current;
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", reset);
      viewport.removeEventListener("pointerdown", onDown);
      viewport.removeEventListener("pointerup", onUp);
      viewport.removeEventListener("pointercancel", onUp);
      viewport.removeEventListener("lostpointercapture", onUp);
      frame.removeEventListener("keydown", onKey);
      reducedMotion.removeEventListener("change", reset);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
      delete stage.dataset.ready;
      model.dispose();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="hero-character-frame"
      tabIndex={0}
      role="group"
      aria-label="Monitor-head character. Drag the head for a full 360 degree turn, or use arrow keys. Home resets."
    >
      <div ref={stageRef} className="hero-character-stage">
        <Image
          src="/images/hero-monitor-fullbody.webp"
          alt="Full-body monitor-head character in a dark jacket, trousers and boots"
          fill
          sizes="(max-width: 760px) 85vw, 30vw"
          priority
          className="hero-character hero-character-body"
        />
        <div ref={viewportRef} className="monitor-head-viewport">
          <canvas
            ref={canvasRef}
            className="monitor-head-canvas"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
