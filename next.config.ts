import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
      resolve: { fullySpecified: false },
    });
    return config;
  },
};

export default withNextVideo(nextConfig);
