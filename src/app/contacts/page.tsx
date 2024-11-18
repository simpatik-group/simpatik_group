import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Contacts from '@/components/pages/Contacts/Contacts';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function ContactsPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
    'CONTACTS',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <Contacts />
    </RootLayout>
  );
}
