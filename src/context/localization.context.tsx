'use client';

import { PropsWithChildren, ReactNode, createContext } from 'react';

export interface ILocalizationContext {
  homePage?: {};
  common?: {};
  life?: {};
}

interface ILocalizationProps {
  data: ILocalizationContext;
  children: ReactNode;
}

export const LocalizationContext = createContext<
  ILocalizationContext | undefined
>(undefined);

const LocalizationProvider = ({
  data,
  children,
}: PropsWithChildren<ILocalizationProps>) => {
  return (
    <LocalizationContext.Provider value={data}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
