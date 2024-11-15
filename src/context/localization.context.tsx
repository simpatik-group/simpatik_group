'use client';

import { FC, ReactNode, createContext } from 'react';

import { ICommonLocalization } from '@/interfaces/common.localization';
import { IHomeLocalization } from '@/interfaces/home.localization';
import { ILifeLocalization } from '@/interfaces/life.localization';

export interface ILocalizationContext {
  homePage?: IHomeLocalization;
  commonContent?: ICommonLocalization;
  lifePage?: ILifeLocalization;
}

interface ILocalizationProps {
  localization: ILocalizationContext;
  children: ReactNode;
}

export const LocalizationContext = createContext<
  ILocalizationContext | undefined
>(undefined);

const LocalizationProvider: FC<ILocalizationProps> = ({
  localization,
  children,
}) => {
  return (
    <LocalizationContext.Provider value={localization}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
