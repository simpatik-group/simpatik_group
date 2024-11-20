import { IDivProps } from '@/interfaces/interfaces';

export interface IListComponent extends IDivProps {
  title: string;
  description: string;
  url?: string;
  counter: string | number;
  withSlider?: boolean;
}
