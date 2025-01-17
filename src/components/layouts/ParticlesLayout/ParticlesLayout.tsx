import { FC } from 'react';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import ParticlesBackground from './ParticlesBackground/ParticlesBackground';
import { IParticlesLayout } from './ParticlesLayout.props';

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
      <ParticlesBackground id={id} />
      {children}
    </section>
  );
};
export default ParticlesLayout;
