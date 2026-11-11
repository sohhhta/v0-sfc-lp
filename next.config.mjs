/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  async headers() {
    // OG画像（/api/og）は検索結果に出す必要がないため、インデックスさせない。SNSの取得は妨げない。
    return [{ source: '/api/og', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }]
  },
  async redirects() {
    return [
      // 旧サイト（WordPress）のURLを、内容が近い新しいページへ転送する。末尾の / は Next.js が先に外す。
      { source: '/course', destination: '/#pricing', permanent: true },
      { source: '/elements/course-content', destination: '/#pricing', permanent: true },
      { source: '/passing-record', destination: '/results', permanent: true },
      { source: '/recommended-articles', destination: '/guide/essay/articles', permanent: true },
      { source: '/%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E8%A8%98%E4%BA%8B', destination: '/guide/essay/articles', permanent: true },
      { source: '/category/essay-writing', destination: '/guide/essay/articles', permanent: true },
      { source: '/faqs', destination: '/#faq', permanent: true },
      { source: '/contact-us', destination: '/#contact-form', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E3%81%AE%E5%B0%8F%E8%AB%96%E6%96%87%E6%88%90%E5%8A%9F%E6%B3%95%E5%89%87%E3%81%A8%E3%81%AF', destination: '/guide/logic-writing', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E5%B0%8F%E8%AB%96%E6%96%87%E5%85%A5%E8%A9%A6%E3%81%AE%E6%99%82%E9%96%93%E9%85%8D%E5%88%86%E3%81%AE%E6%9C%80%E9%81%A9%E8%A7%A3%E3%81%AF', destination: '/guide/time-management', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E5%B0%8F%E8%AB%96%E6%96%87%E3%81%AE%E9%81%8E%E5%8E%BB%E5%95%8F%E3%82%92%E5%BE%B9%E5%BA%95%E6%94%BB%E7%95%A5', destination: '/guide/past-exams', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E3%81%AB%E5%B0%8F%E8%AB%96%E6%96%87%E5%AF%BE%E7%AD%96%E3%81%AA%E3%81%97%E3%81%A7%E3%82%82%E5%90%88%E6%A0%BC%E3%81%A7%E3%81%8D%E3%82%8B', destination: '/guide/essay', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E5%B0%8F%E8%AB%96%E6%96%87%E3%81%AB%E5%90%88%E6%A0%BC%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF', destination: '/guide/essay', permanent: true },
      { source: '/%E5%B0%8F%E8%AB%96%E6%96%87%E6%B7%BB%E5%89%8A%E3%81%AE%E5%8A%B9%E6%9E%9C%E3%81%A8%E9%81%B8%E3%81%B3%E6%96%B9', destination: '/guide/essay', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E5%B0%8F%E8%AB%96%E6%96%87%E3%81%AE%E5%AD%A6%E9%83%A8%E5%88%A5%E3%83%86%E3%83%BC%E3%83%9E%E3%81%A8%E5%AF%BE%E7%AD%96%E6%96%B9%E6%B3%95%E3%82%92%E5%BE%B9%E5%BA%95%E8%A7%A3', destination: '/guide/essay', permanent: true },
      { source: '/%E6%85%B6%E6%87%89sfc%E5%B0%8F%E8%AB%96%E6%96%87%E3%81%AE%E9%9B%A3%E6%98%93%E5%BA%A6%E3%81%AF', destination: '/guide/essay', permanent: true },
      {
        // 除外リスト：ao-guide を追加
        source: '/:path((?!_next|api|course|results|guide|ao-guide|sitemap.xml|robots\\.txt|favicon\\.png|favicon\\.ico|icon\\.png|apple-icon\\.png|logo\\.png|logo-mark\\.png|og-image\\.png|hero\\.jpg|jukucho\\.jpg|signature\\.png|fv-coaching\\.jpg).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
