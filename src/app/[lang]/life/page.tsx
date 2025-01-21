import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export default async function LifePage({ params }: { params: PageParams }) {
  // const locale = await getLocale();
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const common = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'LIFE'],
  });
  const news = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['ALL_NEWS'],
    pagination: '&pagination[start]=0',
  });
  const messages = { ...common, ...news };

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Life />
    </RootLayout>
  );
}
