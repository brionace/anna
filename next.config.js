/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`
  },
  images: {
    domains: ['127.0.0.1', 'annapatonstudios.com'],
  },
}

module.exports = nextConfig
