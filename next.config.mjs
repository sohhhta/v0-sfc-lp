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
      // 1. 特定の重要ページを個別に飛ばす設定
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
      // 2. それ以外のパス（旧ブログ記事など）をすべて新サイトのトップへ飛ばす
      // ※新サイトの既存ページ（/course等）をリダイレクトから除外する正規表現
      {
        source: '/:path((?!course|results|guide/essay).*)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig