import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Color } from '@/interfaces/enums';

export interface IHeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  shadowTitle?: string;
  themeColor: Color;
}
