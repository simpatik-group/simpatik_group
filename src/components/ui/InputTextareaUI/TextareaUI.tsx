import { FC } from 'react';

import clsx from 'clsx';

import styles from './InputTextareaUI.module.scss';
import { ITextareaUIProps } from './InputTextareaUI.props';

const TextareaUI: FC<ITextareaUIProps> = ({
  labelText,
  children,
  className,
  ...props
}) => {
  return (
    <label className={clsx(styles.label, className)}>
      {labelText && <span>{labelText}</span>}
      <textarea
        className={clsx(styles.input, styles.textarea, styles.error)}
        {...props}
      />
    </label>
  );
};

export default TextareaUI;
