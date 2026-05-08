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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...既存のtypescript/images設定
  async redirects() {
    return [
      // 1. まず特定の重要ページを個別に飛ばす（既存の設定）
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
      // 2. それ以外の「lifeeling.jp」から来るすべてのパスを新サイトのTOPへ飛ばす
      // ※末尾に :path* を使うことで、どのURLに来ても拾えるようにします
      {
        source: '/:path((?!course|results|guide/essay).*)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}