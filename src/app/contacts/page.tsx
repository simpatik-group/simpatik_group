import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Contacts from '@/components/pages/Contacts/Contacts';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'CONTACTS'],
  });

  return (
    <RootLayout
      messages={messages}
      themeColor={EColor.dark}
      searchParams={searchParams}
    >
      <Contacts />
    </RootLayout>
  );
}
