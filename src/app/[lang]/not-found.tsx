import type { FC } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import MessagesProvider from '@/context/messages.context';

import NotFound from '@/components/pages/NotFound/NotFound';

import { PageParams } from '@/interfaces/localozation';

import { staticValues } from '@/helpers/staticValues';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: string };
  const { page404 } =
    staticValues.METADATA_DESCRIPTION[
      lang as keyof typeof staticValues.METADATA_DESCRIPTION
    ];

  return {
    title: page404,
    openGraph: {
      title: page404,
    },
  };
}

const Page404: FC = async () => {
  const locale = await getLocale();
  const messages = await requestService.getRequest({
    localization: locale || routing.defaultLocale,
    urls: ['COMMON'],
  });

  return (
    <MessagesProvider messages={messages}>
      <NotFound />
    </MessagesProvider>
  );
};

export default Page404;
