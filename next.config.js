/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` })

module.exports = nextConfig
