/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'loremflickr.com', 'picsum.photos'],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:8080',
  },
};

module.exports = nextConfig; // Correct way to export in a Node.js environment
