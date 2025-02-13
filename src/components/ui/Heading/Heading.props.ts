import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { EColor } from '@/interfaces/enums';

export type THeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface IHeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  heading: THeading;
  title?: string;
  shadowTitle?: string;
  textColor: EColor;
  withTyping?: boolean;
}
