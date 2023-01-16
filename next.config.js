/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  future: { webpack5: true },
  images: {
    domains: [
      "images.vexels.com",
      "drikung.cl",
      "img.freepik.com",
      "w7.pngwing.com",
      "encrypted-tbn0.gstatic.com",
      "mdbootstrap.com",
      "www.thedigitalsalesinstitute.com",
      "assets.entrepreneur.com",
      "www.novagric.com",
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
