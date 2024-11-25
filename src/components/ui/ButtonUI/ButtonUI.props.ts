import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonUIProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  design?: 'solid' | 'transparent';
}
