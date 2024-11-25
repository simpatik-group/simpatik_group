import { FC } from 'react';

import clsx from 'clsx';

import styles from './ButtonUI.module.scss';
import { IButtonUIProps } from './ButtonUI.props';

const ButtonUI: FC<IButtonUIProps> = ({
  design,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        design === 'transparent' ? styles.transparent : styles.solid,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonUI;
