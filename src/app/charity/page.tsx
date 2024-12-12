import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function ContactsPage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <h1>Charity news</h1>
    </RootLayout>
  );
}
