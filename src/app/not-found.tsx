import { FC } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Raleway } from 'next/font/google';

import MessagesProvider from '@/context/messages.context';

import NotFound from '@/components/pages/NotFound/NotFound';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
});

const Page404: FC = async () => {
  const locale = await getLocale();
  const messages = await requestService.getRequest({
    localization: locale || routing.defaultLocale,
    urls: ['COMMON'],
  });

  return (
    <html lang='en'>
      <head>
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
        <NextIntlClientProvider locale={'en'}>
          <MessagesProvider messages={messages}>
            <NotFound />
          </MessagesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Page404;
