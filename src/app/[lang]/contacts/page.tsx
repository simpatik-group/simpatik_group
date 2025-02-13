import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Contacts from '@/components/pages/Contacts/Contacts';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: string };
  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['CONTACTS'],
  });

  return {
    title: messages.CONTACTS?.title,
    openGraph: {
      title: messages.CONTACTS?.title,
    },
  };
}

export default async function ContactsPage({
  searchParams,
  params,
}: {
  searchParams: PageParams;
  params: PageParams;
}) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'CONTACTS'],
  });

  const searchParamsProp = await searchParams;

  return (
    <RootLayout
      messages={messages}
      themeColor={EColor.dark}
      searchParams={searchParamsProp}
    >
      <Contacts />
    </RootLayout>
  );
}
