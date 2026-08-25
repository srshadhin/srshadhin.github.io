import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#e2a444",
            }}
          />
          <div style={{ color: "#9a988f", fontSize: 22, letterSpacing: 2 }}>
            {profile.positioning.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#edebe3", fontSize: 60, fontWeight: 700, lineHeight: 1.15 }}>
            {profile.tagline}
          </div>
          <div style={{ color: "#9a988f", fontSize: 26, maxWidth: 900 }}>
            {`${profile.name} — ${profile.yearsExperience} years of backend engineering experience.`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#e2a444",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          {profile.identityStack.join("  ·  ")}
        </div>
      </div>
    ),
    { ...size }
  );
}
