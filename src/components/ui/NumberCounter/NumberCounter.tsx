import { FC } from 'react';

import clsx from 'clsx';

import styles from './NumberCounter.module.scss';
import { INumberCounterProps } from './NumberCounter.props';

const NumberCounter: FC<INumberCounterProps> = ({
  from,
  to,
  suffix,
  className,
  children,
}) => {
  return (
    <div className={clsx(className)}>
      <span className={styles.number}>{to}</span>
      {suffix && <span className={styles.suffix}>{suffix}</span>}
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default NumberCounter;
