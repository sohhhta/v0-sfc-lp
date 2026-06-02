import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title")?.slice(0, 120) || "慶應SFC専門塾 佐藤塾";

  // ブランドカラー
  const NAVY = "#002147";
  const GOLD = "#C5A059";
  const WHITE = "#FFFFFF";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          padding: "64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* 外周のゴールド枠 */}
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: "28px",
            right: "28px",
            bottom: "28px",
            border: `2px solid ${GOLD}`,
            borderRadius: "8px",
            display: "flex",
          }}
        />

        {/* ヘッダー：カテゴリラベル */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: GOLD,
              color: NAVY,
              fontSize: "26px",
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: "4px",
              letterSpacing: "0.05em",
            }}
          >
            慶應SFC 合格メソッド
          </div>
        </div>

        {/* 中央：タイトル */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* ゴールドの短い横線（装飾） */}
          <div
            style={{
              display: "flex",
              width: "80px",
              height: "6px",
              backgroundColor: GOLD,
              marginBottom: "32px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: title.length > 45 ? "52px" : "64px",
              fontWeight: 700,
              color: WHITE,
              lineHeight: 1.4,
              letterSpacing: "0.02em",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        {/* フッター：ブランド表記 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            borderTop: `1px solid ${GOLD}`,
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              fontWeight: 700,
              color: WHITE,
            }}
          >
            佐藤塾
            <span style={{ color: GOLD, margin: "0 16px" }}>|</span>
            <span style={{ fontSize: "28px", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}>
              慶應SFC専門塾
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: GOLD,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            sfc-satojuku.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
