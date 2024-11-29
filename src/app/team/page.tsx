import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Team from '@/components/pages/Team/Team';

import { EColor } from '@/interfaces/enums';

import requestService from '@/services/request.service';

export default async function ContactsPage() {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON', 'TEAM'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Team />
    </RootLayout>
  );
}
