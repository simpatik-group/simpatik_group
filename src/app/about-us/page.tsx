import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import AboutUs from '@/components/pages/About-us/About-us';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

type Props = {};

export default async function AboutUsPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <AboutUs />
    </RootLayout>
  );
}
