"use client";

export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background:
            "linear-gradient(135deg, var(--sw), var(--ai) 55%, var(--sec))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 15,
          color: "#0b0e13",
          animation: "spinSlow 2.2s linear infinite",
        }}
      >
        SA
      </div>
      <div
        style={{
          width: 160,
          height: 3,
          borderRadius: 4,
          background: "var(--bg-elev-2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, var(--sw), var(--ai) 55%, var(--sec))",
            animation: "loaderBar 1.1s ease-in-out infinite alternate",
          }}
        />
      </div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-faint)",
        }}
      >
        Loading portfolio
      </p>
    </div>
  );
}
