import { FC } from 'react';

import clsx from 'clsx';

import styles from './InputTextareaUI.module.scss';
import { IInputUIProps } from './InputTextareaUI.props';

const InputUI: FC<IInputUIProps> = ({
  labelText,
  children,
  className,
  error,
  ...props
}) => {
  return (
    <label className={clsx(styles.label, className)}>
      {labelText && <span>{labelText}</span>}
      <input
        className={clsx(styles.input, !!error && styles.error)}
        {...props}
      />
    </label>
  );
};

export default InputUI;

// import { forwardRef } from 'react';

// import clsx from 'clsx';

// import styles from './InputTextareaUI.module.scss';
// import { IInputUIProps } from './InputTextareaUI.props';

// const InputUI = forwardRef<HTMLInputElement, IInputUIProps>(
//   ({ className, labelText, ...props }, ref) => {
//     return (
//       <label className={clsx(styles.label, className)}>
//         {labelText && <span>{labelText}</span>}
//         <input className={styles.input} ref={ref} {...props} />
//       </label>
//     );
//   },
// );

// export default InputUI;
