"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const enabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!enabled) return;

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;

    let raf = 0;
    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (!raf) raf = requestAnimationFrame(animateRing);
    }

    function onDown() {
      ringRef.current?.classList.add("cursor-ring-active");
    }
    function onUp() {
      ringRef.current?.classList.remove("cursor-ring-active");
    }

    function animateRing() {
      raf = 0;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      if (Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY) > 0.1)
        raf = requestAnimationFrame(animateRing);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          background: "var(--ai)",
          pointerEvents: "none",
          zIndex: 999,
          boxShadow: "0 0 8px var(--ai)",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderRadius: "50%",
          border: "1px solid var(--border-strong)",
          pointerEvents: "none",
          zIndex: 998,
          transition:
            "width .15s ease, height .15s ease, border-color .15s ease",
        }}
      />
      <style jsx global>{`
        .cursor-ring-active {
          width: 24px !important;
          height: 24px !important;
          margin-left: -12px !important;
          margin-top: -12px !important;
          border-color: var(--ai) !important;
        }
      `}</style>
    </>
  );
}

function subscribe(onStoreChange) {
  if (typeof window === "undefined") return () => {};

  const finePointerQuery = window.matchMedia("(pointer: fine)");
  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  const handleChange = () => onStoreChange();

  finePointerQuery.addEventListener("change", handleChange);
  reducedMotionQuery.addEventListener("change", handleChange);

  return () => {
    finePointerQuery.removeEventListener("change", handleChange);
    reducedMotionQuery.removeEventListener("change", handleChange);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return false;

  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return isFinePointer && !reduced;
}

function getServerSnapshot() {
  return false;
}
