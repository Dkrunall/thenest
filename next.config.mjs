import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const immutableAssets = "public, max-age=31536000, immutable";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return ["/images", "/food", "/interior"]
      .map((dir) => ({
        source: `${dir}/:path*`,
        headers: [{ key: "Cache-Control", value: immutableAssets }],
      }))
      .concat([
        {
          source: "/logo.webp",
          headers: [{ key: "Cache-Control", value: immutableAssets }],
        },
      ]);
  },
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: rootDir,
  },
  outputFileTracingRoot: rootDir,
};

export default nextConfig;
