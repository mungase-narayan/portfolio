import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
  async redirects() {
    return [
      {
        source: "/blogs/dsa/cpp",
        destination: "/blogs/dsa/cpp/introduction",
        permanent: true,
      },
      {
        source: "/blogs/dsa/js",
        destination: "/blogs/dsa/js/introduction",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
