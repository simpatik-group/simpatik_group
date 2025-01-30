import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Raleway } from 'next/font/google';
import { notFound } from 'next/navigation';

import { PageParams } from '@/interfaces/localozation';

import { staticValues } from '@/helpers/staticValues';

import { locales, routing } from '@/i18n/i18n.config';

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
});

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  // read route params
  const { lang } = (await params) as { lang: string };
  const { description, title } =
    staticValues.METADATA_DESCRIPTION[
      lang as keyof typeof staticValues.METADATA_DESCRIPTION
    ];
  return {
    title: {
      template: '%s | Simpatik Group',
      default: title,
    },
    description,
    openGraph: {
      title: {
        template: '%s | Simpatik Group',
        default: title,
      },
      description,
      url: 'https://simpatik.group',
      type: 'website',
      images: [
        {
          url: 'https://simpatik.group/favicon/preview_banner.png',
          width: 582,
          height: 582,
        },
      ],
    },
    icons: {
      icon: [
        {
          url: '/favicon/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon/favicon.ico', rel: 'shortcut icon' },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
      other: [{ rel: 'manifest', url: '/favicon/site.webmanifest' }],
    },
  };
}

// export const metadata: Metadata = {
//   title: 'Simpatik Group',
//   description:
//     'Здатність надихати інших - це та сила, що робить неможливе можливим і втілює мрії в життя.',
// };
export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

const RootLayoutPage = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageParams;
}) => {
  const { lang } = (await params) as { lang: string };
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }
  setRequestLocale(lang || routing.defaultLocale);
  return (
    <html lang={lang}>
      {/* <head>
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
      </head> */}
      <body className={`${raleway.className} `}>
        <NextIntlClientProvider locale={lang}>
          {children}
        </NextIntlClientProvider>
        {/* <Suspense fallback={<Loader />}>{children}</Suspense> */}
      </body>
    </html>
  );
};

export default RootLayoutPage;
