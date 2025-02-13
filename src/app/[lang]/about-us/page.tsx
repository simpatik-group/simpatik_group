import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import AboutUs from '@/components/pages/AboutUs/AboutUs';

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
    urls: ['ABOUT_US'],
  });

  return {
    title: messages.ABOUT_US?.hero_title,
    openGraph: {
      title: messages.ABOUT_US?.hero_title,
    },
  };
}

export default async function AboutUsPage({ params }: { params: PageParams }) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'ABOUT_US'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <AboutUs />
    </RootLayout>
  );
}
