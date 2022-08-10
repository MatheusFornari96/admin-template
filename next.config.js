/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: [
      'image/avif',
      'image/webp'
    ],
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'site-vofstudio.appspot.com'
    ]
  }
}


module.exports = nextConfig
