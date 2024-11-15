'use client';

import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Color } from '@/interfaces/enums';

import styles from './LanguageSwitcher.module.scss';
import { ILanguageSwitcher } from './LanguageSwitcher.props';

const LanguageSwitcher: FC<ILanguageSwitcher> = ({ themeColor, className }) => {
  const router = useParams();

  return (
    <div
      className={clsx(
        className,
        themeColor === Color.white ? styles.white : styles.dark,
      )}
    >
      <Link className={clsx(styles.language, styles.active)} href='/'>
        UA
      </Link>
      <Link className={clsx(styles.language)} href='/'>
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
