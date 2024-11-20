import { IDivProps } from '@/interfaces/interfaces';

export interface INumberCounterProps extends IDivProps {
  from?: number;
  to: number;
  suffix?: string;
}
