/** @type {import('next').NextConfig} */
// import type { NextConfig } from 'next';
import path from 'path';

const nextConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
  },

  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    prependData: `@import "base.scss";`,
  },
};

export default nextConfig;
