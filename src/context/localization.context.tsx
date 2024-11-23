'use client';

import { FC, ReactNode, createContext } from 'react';

import { ICommonLocalization } from '@/interfaces/common.localization';
import { IContactsLocalization } from '@/interfaces/contacts.localization';
import { IHomeLocalization } from '@/interfaces/home.localization';
import { ILifeLocalization } from '@/interfaces/life.localization';
import { ILocationsLocalization } from '@/interfaces/locations.localization';

export interface ILocalizationContext {
  COMMON?: ICommonLocalization;
  HOME_PAGE?: IHomeLocalization;
  LIFE?: ILifeLocalization;
  CAREER?: ILifeLocalization;
  CONTACTS?: IContactsLocalization;
  LOCATIONS?: ILocationsLocalization;
  NEWS?: ILifeLocalization;
  CHARITIES?: ILifeLocalization;
  TEAM?: ILifeLocalization;
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
