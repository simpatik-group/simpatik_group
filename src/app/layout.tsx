import { Suspense } from 'react';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import Loader from '@/components/ui/Loader/Loader';

import '../styles/globals.scss';

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Simpatik Group | Надихати людей',
  description:
    'Здатність надихати інших - це та сила, що робить неможливе можливим і втілює мрії в життя.',
};

const RootLayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='uk'>
      <head>
        <meta property='og:title' content='Simpatik Group' />
        <meta
          property='og:description'
          content='Здатність надихати інших - це та сила, що робить неможливе можливим і втілює мрії в життя.'
        />
        <meta
          property='og:image'
          content='https://simpatik.group/favicon/preview_banner.png'
        />
        <meta property='og:image:width' content='582' />
        <meta property='og:image:height' content='582' />
        <meta property='og:url' content='https://simpatik.group' />
        <meta property='og:type' content='website' />

        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='icon' href='/favicon/favicon.svg' type='image/svg+xml' />
      </head>
      <body className={`${raleway.className} `}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
};

export default RootLayoutPage;
