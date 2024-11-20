import { FC } from 'react';

import clsx from 'clsx';

import { IDivProps } from '@/interfaces/interfaces';

const ContainerUI: FC<IDivProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, 'container', 'grid', 'gap-x-4')}>
      {children}
    </div>
  );
};

export default ContainerUI;
