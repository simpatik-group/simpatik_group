import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Locations from '@/components/pages/Locations/Locations';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function LocationPage() {
  const locale = await getLocale();

  const messages = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'LOCATIONS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Locations />
    </RootLayout>
  );
}
