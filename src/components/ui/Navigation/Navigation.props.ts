import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface INavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: 'dark' | 'white';
  withLangSwitcher?: boolean;
}
