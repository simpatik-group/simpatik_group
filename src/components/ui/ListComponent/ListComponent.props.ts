import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IListComponent
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string;
  description: JSX.Element | string;
  url?: string;
  counter: string | number;
  withSlider?: boolean;
}
