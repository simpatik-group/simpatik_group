import { FC } from 'react';

import { m } from 'motion/react';

import { IAnimateLayout } from './AnimateLayout.props';

const AnimateLayout: FC<IAnimateLayout> = ({
  className,
  children,
  ...props
}) => {
  return (
    <m.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </m.section>
  );
};
export default AnimateLayout;
