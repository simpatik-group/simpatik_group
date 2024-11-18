import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Career from '@/components/pages/Career/Career';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function CareerPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <Career />
    </RootLayout>
  );
}
