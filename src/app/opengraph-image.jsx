import { ImageResponse } from "next/og";
export const alt =
  "Muhammad Shoaib Asghar — Software engineering, applied AI, and cybersecurity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "#090d18",
          color: "#f0f2eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#67e8f9" }}>
          MUHAMMAD SHOAIB ASGHAR
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          <div>Software. AI. Security.</div>
          <div style={{ color: "#67e8f9" }}>Built to work together.</div>
        </div>
        <div style={{ display: "flex", fontSize: 25, color: "#a9b5cd" }}>
          Software engineering / Applied AI / Cybersecurity
        </div>
      </div>
    ),
    size,
  );
}
