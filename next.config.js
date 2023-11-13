/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/admin"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-prod-minimal-v510.vercel.app'
      },
    ]
   }
}

module.exports = nextConfig
