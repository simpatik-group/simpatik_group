import { FC } from 'react';

import clsx from 'clsx';

import { IDivProps } from '@/interfaces/interfaces';

const ParticlesLayout: FC<IDivProps> = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx(className, 'bg-blue-400', 'relative text-white-400')}
      {...props}
    >
      {children}
    </section>
  );
};
export default ParticlesLayout;
