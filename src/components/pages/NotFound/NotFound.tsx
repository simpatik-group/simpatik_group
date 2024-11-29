import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/layouts/RootLayout/Header/Header';

import { EColor } from '@/interfaces/enums';

import { urlPaths } from '@/helpers/urlPath';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.bg}>
      <Header themeColor={EColor.dark} />
      <div className='flex flex-col items-center py-6 text-center'>
        <h1 className={styles.notFound}>404</h1>
        <Image
          src='/img/404_vlc.svg'
          alt='Page not found'
          width={450}
          height={485}
          className='-mt-2 md:-mt-9'
        />
        <h2 className='mt-5 font-bold'>Сторінку не знайдено.</h2>
        <h3>
          Перевірте адресу або поверніться на{' '}
          <Link href={urlPaths.HOMEPAGE}>головну сторінку</Link>.
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
