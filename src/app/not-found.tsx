import { FC } from 'react';

import LocalizationProvider from '@/context/localization.context';
import localizationService from '@/services/localization.service';
import NotFound from '@/components/pages/NotFound/NotFound';

const Page404: FC = async() => {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
  ]);

  return (
    // <RootLayout localization={localization} themeColor={EColor.dark} hideFooter>
    <LocalizationProvider localization={localization}>
      <NotFound />
    </LocalizationProvider>

    // </RootLayout>

  );
};

export default Page404;