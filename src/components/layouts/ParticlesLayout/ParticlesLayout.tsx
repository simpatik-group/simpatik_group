import { FC } from 'react';

import clsx from 'clsx';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';

import { IDivProps } from '@/types/interfaces';

const ParticlesLayout: FC<IDivProps> = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx(className, 'bg-blue-400', 'relative text-white-400')}
      {...props}
    >
      <ContainerUI>{children}</ContainerUI>
    </section>
  );
};
export default ParticlesLayout;
