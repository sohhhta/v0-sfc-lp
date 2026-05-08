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
      // 2. キャッチオール設定（無限ループ防止版）
      // 「guide/essay」ではなく「guide」と書くことで、配下のページすべてを許可します。
      {
        source: '/:path((?!course|results|guide|sitemap.xml|icon).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig