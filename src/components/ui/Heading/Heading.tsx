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
        'relative',
        themeColor === Color.white ? styles.white : styles.black,
      )}
    >
      {createElement(
        heading,
        {
          className: clsx(className, styles.heading),
          ...props,
        },
        title || children,
      )}
      {shadowTitle && <span className={styles.shadowTitle}>{shadowTitle}</span>}
    </div>
  );
};

export default Heading;
