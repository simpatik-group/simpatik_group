import { FC } from 'react';

import clsx from 'clsx';

import { IContainerUIProps } from './ContainerUI.props';

const ContainerUI: FC<IContainerUIProps> = ({
  withoutGridSystem,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        className,
        'container',
        'grid',
        'gap-x-4',
        !withoutGridSystem && 'md:grid-cols-12',
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContainerUI;
