import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Career from '@/components/pages/Career/Career';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function CareerPage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Career />
    </RootLayout>
  );
}
