import { ImageResponse } from "next/og";

// Branded link-preview card (Slack, LinkedIn, iMessage, Google). Without this,
// shares fell back to a bare icon or registrar placeholder. Next serves this
// for both og:image and twitter:image automatically.
export const runtime = "edge";
export const alt = "Klovered — AI RFP response software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0B3D24",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#12B24A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em" }}>Klovered</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Win the bid, not the busywork.
          </div>
          <div style={{ fontSize: 30, color: "#9FE3B8", fontWeight: 500 }}>
            AI RFP responses. 300 questions in 3 days, not 3 weeks.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
