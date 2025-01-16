import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function LifePage() {
  const common = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'LIFE'],
  });
  const news = await requestService.getRequest({
    localization: 'uk',
    urls: ['ALL_NEWS'],
    pagination: '&pagination[start]=0',
  });
  const messages = { ...common, ...news };

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Life />
    </RootLayout>
  );
}
