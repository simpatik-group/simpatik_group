// @ts-check

/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
    localeDetection: false,
  },
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
    prependData: `@import "base.scss";`,
  },
};

export default nextConfig;
