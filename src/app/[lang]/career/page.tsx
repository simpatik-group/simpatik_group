import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Career from '@/components/pages/Career/Career';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function CareerPage() {
  const locale = await getLocale();

  const messages = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'CAREER'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.white}>
      <Career />
    </RootLayout>
  );
}
