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
      // 1. 特定の重要ページを個別に飛ばす
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
      // 2. 指定したページ「以外」で、かつ「1文字以上のパス」がある場合のみトップへ飛ばす
      // 除外リストに sitemap.xml を追加しました
      {
        source: '/:path((?!course|results|guide/essay|sitemap.xml).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig