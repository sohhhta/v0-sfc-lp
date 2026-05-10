/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/elements/course-content/', destination: '/course', permanent: true },
      { source: '/passing-record/', destination: '/results', permanent: true },
      { source: '/recommended-articles/', destination: '/guide/essay', permanent: true },
      {
        source: '/:path((?!_next|api|course|results|guide|sitemap.xml|favicon\\.png|og-image\\.png|hero\\.jpg|jukucho\\.jpg|signature\\.png).+)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
export default nextConfig