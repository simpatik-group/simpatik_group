'use client';

import { FC, ReactNode, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import LocalizationProvider, {
  ILocalizationContext,
} from '@/context/localization.context';

import type { EColor } from '@/interfaces/enums';

import { scrollMe } from '@/helpers/scrollFunction';

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
  const query = useSearchParams().get('id');

  useEffect(() => {
    if (query) {
      setTimeout(() => {
        scrollMe({ elem: document.querySelector(`#${query}`), noSmooth: true });
      }, 50);
    }
  }, [query]);

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
