import { FC, useEffect } from 'react';

import { useLocale } from 'next-intl';
import Image from 'next/image';

import Header from '@/components/layouts/RootLayout/Header/Header';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import { staticValues } from '@/helpers/staticValues';
import { urlPaths } from '@/helpers/urlPath';

import styles from './NotFoundComponent.module.scss';
import { Link } from '@/i18n/i18n.config';

const NotFoundComponent: FC = () => {
  const commonContent = useMessages('COMMON');
  const lang = useLocale();
  const { page404 } =
    staticValues.METADATA_DESCRIPTION[
      lang as keyof typeof staticValues.METADATA_DESCRIPTION
    ];

  useEffect(() => {
    document.title = page404 + ' | Simpatik Group';
  }, []);

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
        <h3>
          <Link href={urlPaths.HOMEPAGE}>{commonContent?.notfound_text}</Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFoundComponent;
