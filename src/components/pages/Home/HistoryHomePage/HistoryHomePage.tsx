import { FC } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import { Breaks } from '@/components/ui/Breacks/Breacks';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import { urlPaths } from '@/helpers/urlPath';

import styles from './HistoryHomePage.module.scss';

const HistoryHomePage: FC = () => {
  const homePage = useMessages('HOME_PAGE');

  return (
    <ParticlesLayout>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={homePage?.history_title || ''}
          shadowTitle={homePage?.history_title_shadow}
          textColor={EColor.white}
        />
        <Image
          src={homePage?.history_cover?.url || ''}
          alt={homePage?.history_title || ''}
          width={288}
          height={192}
          sizes='75vw'
          className={styles.image}
        />
        <p className={styles.description}>
          <Breaks description={homePage?.history_description || ''} />
        </p>
        <LinkUI
          href={urlPaths.ABOUT_US}
          withArrow
          themeColor={EColor.white}
          className={styles.link}
        >
          {homePage?.history_button}
        </LinkUI>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default HistoryHomePage;
