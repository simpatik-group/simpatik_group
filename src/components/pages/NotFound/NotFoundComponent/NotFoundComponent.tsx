import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { EColor } from '@/interfaces/enums';
import { useLocalization } from '@/hooks/useLocalization';
import Header from '@/components/layouts/RootLayout/Header/Header';

import styles from './NotFoundComponent.module.scss';

const NotFoundComponent: FC = () => {
  const commonContent = useLocalization('COMMON');

  return (
    <div className={styles.bg}>
      <Header themeColor={EColor.dark} />
      <div className='flex flex-col items-center py-6 px-4 text-center'>
        <h1 className={styles.notFound}>404</h1> 
        <Image
          src='/img/404_vlc.svg'
          alt='Page not found'
          width={450}
          height={485}
          className='-mt-2 md:-mt-9'
        />
        <h2 className='mt-5 font-bold'>{commonContent?.notfound_title}</h2>
        <h3><Link href={'/'}>{commonContent?.notfound_text}</Link></h3>
      </div>
    </div>
  );
};

export default NotFoundComponent;