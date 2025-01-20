import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import AboutUs from '@/components/pages/AboutUs/AboutUs';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function AboutUsPage() {
  const locale = await getLocale();

  const messages = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'ABOUT_US'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <AboutUs />
    </RootLayout>
  );
}
