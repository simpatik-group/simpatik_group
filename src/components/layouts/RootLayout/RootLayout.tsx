import { FC, ReactNode } from 'react';

import LocalizationProvider, {
  ILocalizationContext,
} from '@/context/localization.context';

import type { EColor } from '@/interfaces/enums';

import Footer from './Footer/Footer';
import Header from './Header/Header';

interface IRootLayout {
  children: ReactNode;
  themeColor: EColor;
  localization: ILocalizationContext;
}

const RootLayout: FC<IRootLayout> = ({
  localization,
  children,
  themeColor,
}) => {
  return (
    <LocalizationProvider localization={localization}>
      <div className='overflow-clip'>
        <Header themeColor={themeColor} />
        <main>{children}</main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
};
export default RootLayout;
