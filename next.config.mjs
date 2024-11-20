// @ts-check

/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
    localeDetection: false,
  },
  images: {
    domains: ['cloud.devtome.top'],
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    prependData: `@import "base.scss";`,
  },
};

export default nextConfig;
