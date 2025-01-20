import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Team from '@/components/pages/Team/Team';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function ContactsPage() {
  const locale = await getLocale();

  const messages = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'TEAM', 'HOME_PAGE'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.white}>
      <Team />
    </RootLayout>
  );
}
