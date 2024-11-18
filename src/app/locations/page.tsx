import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Locations from '@/components/pages/Locations/Locations';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function LocationPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
    'LOCATIONS',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <Locations />
    </RootLayout>
  );
}
