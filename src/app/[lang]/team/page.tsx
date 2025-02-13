import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Team from '@/components/pages/Team/Team';

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
    urls: ['TEAM'],
  });

  return {
    title: messages.TEAM?.hero_title,
    openGraph: {
      title: messages.TEAM?.hero_title,
    },
  };
}

export default async function TeamPage({ params }: { params: PageParams }) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'TEAM', 'HOME_PAGE'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.white}>
      <Team />
    </RootLayout>
  );
}
