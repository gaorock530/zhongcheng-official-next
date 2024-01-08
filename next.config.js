/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  images: { unoptimized: true },
  
 
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH
  },
}

module.exports = nextConfig
