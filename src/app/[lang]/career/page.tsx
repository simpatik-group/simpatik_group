import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Career from '@/components/pages/Career/Career';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export default async function CareerPage({ params }: { params: PageParams }) {
  // const locale = await getLocale();

  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);

  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON', 'CAREER'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.white}>
      <Career />
    </RootLayout>
  );
}
