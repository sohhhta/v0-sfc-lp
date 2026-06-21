import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Vercel上で高速動作させるための必須設定
export const runtime = "edge";

// OG画像に必要な日本語フォント（Noto Sans JP）を動的に取得する関数
async function getJapaneseFont(text: string) {
  try {
    // 記事タイトルと固定テキストを結合し、重複文字を排除（通信を極限まで軽くするため）
    const allText = text + "慶應SFC専門塾佐藤メソッド|";
    const uniqueChars = Array.from(new Set(allText.split(""))).join("");

    // 必要な文字だけの軽量なフォントをGoogle Fontsにリクエスト
    const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(uniqueChars)}`;
    const css = await fetch(url).then((res) => res.text());

    // CSSから実際のフォントファイル（woff2等）のURLを抽出してダウンロード
    const fontUrlMatch = css.match(/url\((.+?)\)/);
    if (fontUrlMatch) {
      const fontUrl = fontUrlMatch[1].replace(/['"]/g, "");
      const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());
      return fontData;
    }
  } catch (e) {
    console.error("Font fetch error:", e);
  }
  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title")?.slice(0, 120) || "慶應SFC専門塾 佐藤塾";

  // ブランドカラー
  const NAVY = "#002147";
  const GOLD = "#C5A059";
  const WHITE = "#FFFFFF";

  // フォントデータの取得
  const fontData = await getJapaneseFont(title);

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
          fontFamily: '"Noto Sans JP", sans-serif', // 取得したフォントを適用
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
      // 取得したフォントデータをImageResponseエンジンに渡す
      fonts: fontData
        ? [
            {
              name: "Noto Sans JP",
              data: fontData,
              style: "normal",
              weight: 700,
            },
          ]
        : undefined,
    }
  );
}