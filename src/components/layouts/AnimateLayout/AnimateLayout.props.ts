import { ReactNode } from 'react';

import { HTMLMotionProps } from 'motion/react';

export interface IAnimateLayout
  extends Omit<HTMLMotionProps<'section'>, 'ref'> {
  children?: ReactNode;
}
