/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "asset.cloudinary.com",
      "res.cloudinary.com",
      "i.ibb.co",
      "i.imgur.com",
      "cdn-icons-png.flaticon.com",
      "bicialtea.labici.net",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
