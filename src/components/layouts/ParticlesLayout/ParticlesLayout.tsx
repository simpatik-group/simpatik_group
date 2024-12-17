import { FC } from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { IParticlesLayout } from './ParticlesLayout.props';

const ParticlesBackgroundDynamic = dynamic(
  () => import('./ParticlesBackground/ParticlesBackground'),
);

const ParticlesLayout: FC<IParticlesLayout> = ({
  id,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(
        className,
        'bg-blue-400',
        'relative z-0 text-white-400',
        'pageSection',
      )}
      {...props}
    >
      <ParticlesBackgroundDynamic id={id} />
      {children}
    </section>
  );
};
export default ParticlesLayout;
