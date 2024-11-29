import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import AboutUs from '@/components/pages/AboutUs/AboutUs';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function AboutUsPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
    'ABOUTUS',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <AboutUs />
    </RootLayout>
  );
}
