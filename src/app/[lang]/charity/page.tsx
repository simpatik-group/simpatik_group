import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Charity from '@/components/pages/Charity/Charity';

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
    urls: ['CHARITY_PAGE'],
  });

  return {
    title: messages.CHARITY_PAGE?.hero_title,
    openGraph: {
      title: messages.CHARITY_PAGE?.hero_title,
    },
  };
}

export default async function CharityPage({ params }: { params: PageParams }) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const common = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'CHARITY_PAGE'],
  });
  const news = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['ALL_CHARITIES'],
    pagination: '&pagination[start]=0',
  });
  const messages = { ...common, ...news };

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Charity />
    </RootLayout>
  );
}
