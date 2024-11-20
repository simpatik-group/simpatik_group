import { FC, createElement } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import styles from './Heading.module.scss';
import { IHeadingProps } from './Heading.props';

const Heading: FC<IHeadingProps> = ({
  heading,
  title,
  textColor,
  shadowTitle,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.headingWrap,
        textColor === EColor.white ? styles.white : styles.black,
        className,
      )}
    >
      {createElement(
        heading,
        {
          className: styles.heading,
          ...props,
        },
        title || children,
      )}
      {shadowTitle && <span className={styles.shadowTitle}>{shadowTitle}</span>}
    </div>
  );
};

export default Heading;
