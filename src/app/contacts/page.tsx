import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Contacts from '@/components/pages/Contacts/Contacts';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'CONTACTS'],
  });
  const searchParamsProp = await searchParams;

  return (
    <RootLayout
      messages={messages}
      themeColor={EColor.dark}
      searchParams={searchParamsProp}
    >
      <Contacts />
    </RootLayout>
  );
}
