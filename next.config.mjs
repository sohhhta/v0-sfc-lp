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
      // 末尾を「.+」にすることで、空のパス（ホームページ自体）を対象から外し、無限ループを防ぎます
      {
        source: '/:path((?!course|results|guide/essay).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig