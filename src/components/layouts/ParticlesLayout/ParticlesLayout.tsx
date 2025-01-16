import { FC } from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';

import { IParticlesLayout } from './ParticlesLayout.props';

const ParticlesBackgroundDynamic = dynamic(
  () => import('./ParticlesBackground/ParticlesBackground'),
  { ssr: false },
);

const ParticlesLayout: FC<IParticlesLayout> = ({
  id,
  className,
  children,
  ...props
}) => {
  id = id ? id : uuidv4();
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
