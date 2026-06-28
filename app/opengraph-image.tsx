import { ImageResponse } from "next/og";

export const alt = "Rahul Gupta — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        color: "white",
        background: "radial-gradient(circle at 75% 25%, #173a70 0%, #0a0a0a 48%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#60a5fa", fontSize: 24, letterSpacing: 5 }}>FULL STACK DEVELOPER</div>
      <div style={{ display: "flex", fontSize: 86, fontWeight: 800, marginTop: 24 }}>Rahul Gupta</div>
      <div style={{ display: "flex", color: "#a1a1aa", fontSize: 30, marginTop: 26 }}>
        Next.js · Node.js · PostgreSQL · Redis
      </div>
      <div style={{ display: "flex", color: "#71717a", fontSize: 22, marginTop: 70 }}>
        Building fast, scalable, SEO-focused web products.
      </div>
    </div>,
    size,
  );
}
