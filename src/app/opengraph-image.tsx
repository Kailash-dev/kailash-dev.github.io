import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#171717",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fafafa",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            {siteConfig.author.initials}
          </div>
          <span style={{ fontSize: "22px", color: "#737373" }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#171717",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#525252",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        <div style={{ fontSize: "20px", color: "#a3a3a3" }}>
          {new URL(siteConfig.url).host}
        </div>
      </div>
    ),
    { ...size },
  );
}
