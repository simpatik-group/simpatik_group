import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';

export interface IAccordionItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  accordionTitle: JSX.Element | string;
  accordionDescription: JSX.Element | string;
  index?: number;
}
