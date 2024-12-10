
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
        hostname: 'mmmlqhebg2fzjv4u.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },

};

export default nextConfig;
