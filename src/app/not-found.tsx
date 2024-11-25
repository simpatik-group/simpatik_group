import { FC } from 'react';

import NotFound from '@/components/pages/NotFound/NotFound';
import LocalizationProvider from '@/context/localization.context';
import localizationService from '@/services/localization.service';


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