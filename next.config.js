/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['label-engine.com', 'd2tccurk3pc1sk.cloudfront.net', 'yt3.googleusercontent.com', 'i1.sndcdn.com', 'static1.squarespace.com', 'geo-media.beatport.com', 'upload.wikimedia.org', 'pbs.twimg.com'],
  },
};

module.exports = nextConfig;
