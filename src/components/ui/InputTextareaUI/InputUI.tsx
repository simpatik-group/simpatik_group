import { FC } from 'react';

import clsx from 'clsx';

import styles from './InputTextareaUI.module.scss';
import { IInputUIProps } from './InputTextareaUI.props';

const InputUI: FC<IInputUIProps> = ({
  labelText,
  children,
  className,
  ...props
}) => {
  return (
    <label className={clsx(styles.label, className)}>
      {labelText && <span>{labelText}</span>}
      <input className={styles.input} {...props} />
    </label>
  );
};

export default InputUI;
