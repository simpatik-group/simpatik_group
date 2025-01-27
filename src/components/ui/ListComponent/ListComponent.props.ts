import { AnchorHTMLAttributes, DetailedHTMLProps, JSX } from 'react';

export interface IListComponent
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string;
  description: JSX.Element | string;
  url?: string;
  asLink?: boolean;
  counter: string | number;
  tag?: keyof JSX.IntrinsicElements;
}
