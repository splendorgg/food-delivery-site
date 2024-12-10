
const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'food-delivery-site-nextjs.vercel.app',
        port: '',
      },
    ],
  },

};

export default nextConfig;
