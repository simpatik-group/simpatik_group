import { FC, useState } from 'react';

import { m } from 'motion/react';

import { IAnimateLayout } from './AnimateLayout.props';

const AnimateLayout: FC<IAnimateLayout> = ({
  className,
  children,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
      onViewportEnter={() => setAnimate(true)}
      {...props}
    >
      {children}
    </m.div>
  );
};
export default AnimateLayout;
