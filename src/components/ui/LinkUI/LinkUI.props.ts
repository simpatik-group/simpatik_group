import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { EColor } from '@/interfaces/enums';

export interface ILinkUIProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  withArrow?: boolean;
  href: string;
  themeColor: EColor;
}
