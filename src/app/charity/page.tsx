import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Charity from '@/components/pages/Charity/Charity';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function ContactsPage() {
  const common = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'CHARITY_PAGE'],
  });
  const news = await requestService.getRequest({
    localization: 'uk',
    urls: ['ALL_CHARITIES'],
    pagination: '&pagination[start]=0',
  });
  const messages = { ...common, ...news };

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Charity />
    </RootLayout>
  );
}
