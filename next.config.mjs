/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // 1. 特定の重要ページを詳細へリダイレクト
      {
        source: '/elements/course-content/',
        destination: '/course',
        permanent: true,
      },
      {
        source: '/passing-record/',
        destination: '/results',
        permanent: true,
      },
      {
        source: '/recommended-articles/',
        destination: '/guide/essay',
        permanent: true,
      },
      // 2. キャッチオール設定（システムファイルと特定ページを除外）
      {
        // 除外リストに _next (システム用) と api を追加しました
        // これを入れないとNext.jsが動かなくなります
        source: '/:path((?!_next|api|course|results|guide|sitemap.xml|icon|hero.jpg|jukucho.jpg|signature.png).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig