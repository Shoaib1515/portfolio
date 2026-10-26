"use client";
import { useSyncExternalStore } from "react";

function getSnapshot() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}
function getServerSnapshot() {
  return "dark";
}
function subscribe(callback) {
  function onStorage(event) {
    if (event.key === "portfolio-theme") {
      document.documentElement.dataset.theme =
        event.newValue === "light" ? "light" : "dark";
      callback();
    }
  }
  window.addEventListener("portfolio-theme-change", callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("portfolio-theme-change", callback);
    window.removeEventListener("storage", onStorage);
  };
}
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  function toggleTheme() {
    const next = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works when storage is unavailable. */
    }
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }
  return { theme, toggleTheme };
}
