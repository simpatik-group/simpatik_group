import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { IFag } from '@/interfaces/home.localization';

export interface IAccordionItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  accordionItem: IFag;
  accordionTitle: ReactNode;
  accordionDescription: ReactNode;
}
