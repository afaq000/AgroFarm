// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@ckeditor/ckeditor5-react'],
};
export default nextConfig;
