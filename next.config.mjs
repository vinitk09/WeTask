/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    // Example: Adding a custom loader for .md files
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader", // or any other loader you want to add
    });

    // Example: Add fallback for `fs` module (used in browser-side code)
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    // You can add more custom configurations here.

    return config;
  },
};

export default nextConfig;
