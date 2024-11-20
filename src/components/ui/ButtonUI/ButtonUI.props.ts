import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { EColor } from '@/interfaces/enums';

export interface IButtonUIProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  themeColor: EColor;
}
