/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/advise',
        destination: '/',
        permanent: true,
      },
      {
        source: '/develop',
        destination: '/',
        permanent: true,
      },
      {
        source: '/train',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/mario-galla',
        destination: '/',
        permanent: true,
      },
      {
        source: '/references',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
