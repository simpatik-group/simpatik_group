import { FC, createElement } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import AnimateTyping from '../AnimateTyping/AnimateTyping';

import styles from './Heading.module.scss';
import { IHeadingProps } from './Heading.props';

const Heading: FC<IHeadingProps> = ({
  heading,
  title,
  textColor,
  shadowTitle,
  children,
  className,
  withTyping,
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
        withTyping ? (
          <AnimateTyping
            delay={1}
            text={title || ''}
            duration={2}
            textColor={textColor}
          />
        ) : (
          title || children
        ),
      )}
      {shadowTitle && <span className={styles.shadowTitle}>{shadowTitle}</span>}
    </div>
  );
};

export default Heading;
