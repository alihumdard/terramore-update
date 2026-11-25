/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Static export: `next build` writes a plain HTML/CSS/JS site to ./out,
  // which can be uploaded straight into cPanel's public_html. No Node
  // process is required on the server.
  output: "export",

  // Each route becomes a folder with an index.html (/nosotros/index.html),
  // so Apache/LiteSpeed serves it without any rewrite rules.
  trailingSlash: true,

  images: {
    // next/image's optimizer needs a running server; static export has none,
    // so images are served as-is.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    qualities: [75, 90],
  },
};

export default nextConfig;
