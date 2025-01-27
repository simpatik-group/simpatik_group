import { FC } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import styles from './LinkUI.module.scss';
import { ILinkUIProps } from './LinkUI.props';
import { Link } from '@/i18n/i18n.config';

const LinkUI: FC<ILinkUIProps> = ({
  withArrow,
  href,
  themeColor,
  children,
  className,
  target,
}) => {
  return (
    <Link
      href={href}
      scroll={true}
      target={target}
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
