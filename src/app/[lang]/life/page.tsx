import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function LifePage() {
  const locale = await getLocale();

  const common = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'LIFE'],
  });
  const news = await requestService.getRequest({
    localization: locale,
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
