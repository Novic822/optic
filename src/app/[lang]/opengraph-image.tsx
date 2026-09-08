import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";

export const alt = "OCULUS — Dr Magdalena Turek, Kościan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pl = !isLocale(lang) || lang === "pl";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1d36",
          color: "white",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid rgba(201,168,76,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 96px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                border: "2px solid #c9a84c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  border: "1.5px solid #c9a84c",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, letterSpacing: 4, fontWeight: 600 }}>OCULUS</div>
              <div
                style={{
                  fontSize: 16,
                  color: "#c9a84c",
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Dr Magdalena Turek
              </div>
            </div>
          </div>
          <div
            style={{
              width: 80,
              height: 1,
              background: "#c9a84c",
              marginBottom: 36,
            }}
          />
          <div style={{ fontSize: 52, lineHeight: 1.15, maxWidth: 860, fontWeight: 600 }}>
            {pl
              ? "Gabinet Okulistyczny i Optyczny w Kościanie"
              : "Ophthalmology & Optical Clinic in Kościan"}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "rgba(255,255,255,0.65)",
              fontFamily: "Arial, sans-serif",
              maxWidth: 760,
            }}
          >
            {pl
              ? "Badania wzroku · Diagnostyka jaskry · Salon optyczny"
              : "Eye exams · Glaucoma diagnostics · Optical salon"}
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 18,
              color: "#c9a84c",
              fontFamily: "Arial, sans-serif",
              letterSpacing: 1,
            }}
          >
            Moniuszki 10, 64-000 Kościan
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
