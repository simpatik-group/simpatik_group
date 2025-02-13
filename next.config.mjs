import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.devtome.top',
        pathname: '/domains/simpatik.group/**',
      },
    ],
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    prependData: `@use "base" as *;`,
  },
};

export default withNextIntl(nextConfig);
