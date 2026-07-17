/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a self-contained server bundle (.next/standalone) so the Docker image
  // can run `node server.js` without node_modules or the full source tree.
  output: "standalone",
};

module.exports = nextConfig;
