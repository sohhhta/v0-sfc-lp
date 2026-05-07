/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // リダイレクト設定（旧サイトパスから新サイトパスへ）
  // 注意: sourceには完全URLではなくパスのみを指定
  async redirects() {
    return [
      {
        // 旧：コース・料金ページのパス
        source: '/elements/course-content',
        destination: '/course',
        permanent: true,
      },
      {
        // 旧：合格実績ページのパス
        source: '/passing-record',
        destination: '/results',
        permanent: true,
      },
      {
        // 旧：小論文ガイド関連のパス
        source: '/recommended-articles',
        destination: '/guide/essay',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
