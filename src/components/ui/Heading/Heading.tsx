import { FC, createElement } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import styles from './Heading.module.scss';
import { IHeadingProps } from './Heading.props';

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
        themeColor === EColor.white ? styles.white : styles.black,
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
