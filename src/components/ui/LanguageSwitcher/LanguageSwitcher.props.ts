import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILanguageSwitcher
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: 'dark' | 'white';
  withLangSwitcher?: boolean;
}
