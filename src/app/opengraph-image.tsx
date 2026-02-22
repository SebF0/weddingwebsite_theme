import { ImageResponse } from "next/og";

/**
 * Generates the Open Graph image for link previews (WhatsApp, Facebook, etc.).
 * Uses the same rings design as the favicon. WhatsApp uses og:image, not favicon.
 */
export const runtime = "edge";
export const alt = "Louise & Sebastian — Wedding";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2EDE8",
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3C4A3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: "#3C4A3E",
            fontFamily: "Georgia, serif",
            letterSpacing: "0.2em",
          }}
        >
          Louise & Sebastian
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 24,
            color: "#5C6B52",
            fontFamily: "Georgia, serif",
          }}
        >
          Wedding
        </div>
      </div>
    ),
    { ...size }
  );
}
