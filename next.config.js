/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory, so we need to set the basePath
  // basePath: '/cabin-party', // Uncomment and modify if your repo name is different
}

module.exports = nextConfig 