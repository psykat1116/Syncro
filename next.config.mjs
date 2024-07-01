/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.clerk.dev",
      },
    ],
  },
};

export default nextConfig;
