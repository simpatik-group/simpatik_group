import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { EColor } from '@/interfaces/enums';

import styles from './LinkUI.module.scss';
import { ILinkUIProps } from './LinkUI.props';

const LinkUI: FC<ILinkUIProps> = ({
  withArrow,
  href,
  themeColor,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        styles.link,
        themeColor === EColor.white ? styles.white : styles.dark,
        className,
      )}
    >
      {children}
      {withArrow && (
        <img
          src={
            themeColor === EColor.white
              ? '/img/arrow-orange.svg'
              : '/img/arrow-black.svg'
          }
          alt='arrow'
          width={24}
        />
      )}
    </Link>
  );
};

export default LinkUI;
