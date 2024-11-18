import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function LifePage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
    'LIFE',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <Life />
    </RootLayout>
  );
}
