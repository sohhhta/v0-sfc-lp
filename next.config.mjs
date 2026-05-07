/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ここからリダイレクト設定を追加
  async redirects() {
    return [
      {
        // 旧：コース・料金ページのURL
        source: 'https://lifeeling.jp/elements/course-content/', 
        destination: '/course',
        permanent: true, // trueにすることで301リダイレクトになります
      },
      {
        // 旧：合格実績ページのURL
        source: 'https://lifeeling.jp/passing-record/',
        destination: '/results',
        permanent: true,
      },
      {
        // 旧：小論文ガイド関連のURL
        source: 'https://lifeeling.jp/recommended-articles/',
        destination: '/guide/essay',
        permanent: true,
      },
      // もし旧サイトの特定のディレクトリ（例: /blog/...）をすべて新ガイドに飛ばしたい場合
      /*
      {
        source: '/blog/:path*',
        destination: '/guide/essay',
        permanent: true,
      },
      */
    ]
  },
}

export default nextConfig