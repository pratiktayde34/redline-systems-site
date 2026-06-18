import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  serverExternalPackages: ["gray-matter", "next-mdx-remote"],
  /* config options here */
};

export default nextConfig;
