import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function LifePage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'LIFE'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Life />
    </RootLayout>
  );
}
