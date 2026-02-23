/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'rilstaticasset.akamaized.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.adani.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tatapower.com',
      },
      {
        protocol: 'https',
        hostname: '2025prodstorageaccount-eqdyc8g8hpccdfez.a02.azurefd.net',
      },
      {
        protocol: 'https',
        hostname: 'www.ongcindia.com',
      },
    ],
  },
};

export default nextConfig;
