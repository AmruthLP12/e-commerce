/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "www.lorempixel.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
    ],
  },
};

export default nextConfig;
