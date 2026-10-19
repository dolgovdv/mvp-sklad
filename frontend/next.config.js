/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Включает сверхбыструю компиляцию на Rust вместо Webpack инструментов
};

module.exports = nextConfig;
