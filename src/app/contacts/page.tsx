import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Contacts from '@/components/pages/Contacts/Contacts';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function ContactsPage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'CONTACTS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Contacts />
    </RootLayout>
  );
}
