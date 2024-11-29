import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Locations from '@/components/pages/Locations/Locations';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function LocationPage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'LOCATIONS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Locations />
    </RootLayout>
  );
}
