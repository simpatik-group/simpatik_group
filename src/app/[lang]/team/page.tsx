import { setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Team from '@/components/pages/Team/Team';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export default async function TeamPage({ params }: { params: PageParams }) {
  // const locale = await getLocale();
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
