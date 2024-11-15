import { FC, createElement } from 'react';

import clsx from 'clsx';

import styles from './Heading.module.scss';
import { IHeadingProps } from './Heading.props';
import { Color } from '@/types/enums';

const Heading: FC<IHeadingProps> = ({
  heading,
  title,
  themeColor,
  shadowTitle,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative z-10',
        themeColor === Color.white ? styles.white : styles.black,
      )}
    >
      {createElement(
        heading,
        {
          className: clsx(styles.heading, className),
          ...props,
        },
        title || children,
      )}
      {shadowTitle && <span className={styles.shadowTitle}>{shadowTitle}</span>}
    </div>
  );
};

export default Heading;
