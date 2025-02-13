import { getLocale, setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export default async function HomePage({ params }: { params: PageParams }) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);
  const locale = await getLocale();
  const messages = await requestService.getRequest({
    localization: locale || routing.defaultLocale,
    urls: ['COMMON', 'HOME_PAGE', 'LOCATIONS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Home />
    </RootLayout>
  );
}
