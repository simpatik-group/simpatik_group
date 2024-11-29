import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { LinkProps } from 'next/link';

import { EColor } from '@/interfaces/enums';

export interface ILinkUIProps
  extends Omit<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >,
      'href'
    >,
    LinkProps {
  withArrow?: boolean;
  themeColor: EColor;
}
