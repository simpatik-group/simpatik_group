import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import styles from './Social.module.scss';
import { IDivProps } from '@/types/interfaces';

const Social: FC<IDivProps> = ({ className }) => {
  return (
    <div className={clsx(styles.wrap, className)}>
      <Link
        href='https://www.facebook.com/holdingsimpatikgroup/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <img src='/img/social/fb.svg' width={40} height={40} alt='facebook' />
      </Link>
      <Link
        href='https://www.facebook.com/holdingsimpatikgroup/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <img
          src='/img/social/instagram.svg'
          width={40}
          height={40}
          alt='facebook'
        />
      </Link>
      <Link
        href='https://www.facebook.com/holdingsimpatikgroup/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <img
          src='/img/social/linkedin.svg'
          width={40}
          height={40}
          alt='facebook'
        />
      </Link>
      <Link
        href='https://www.facebook.com/holdingsimpatikgroup/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <img
          src='/img/social/email.svg'
          width={40}
          height={40}
          alt='facebook'
        />
      </Link>
      <Link
        href='https://www.facebook.com/holdingsimpatikgroup/'
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        <img
          src='/img/social/youtube.svg'
          width={40}
          height={40}
          alt='facebook'
        />
      </Link>
    </div>
  );
};

export default Social;
