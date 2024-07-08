/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "http",
            hostname: "untitled-twkmuar27a-uc.a.run.app",
            pathname: "**",
          }
        ],
      },
};

export default nextConfig;
