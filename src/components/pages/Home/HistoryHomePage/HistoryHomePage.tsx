import { FC } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './HistoryHomePage.module.scss';

const HistoryHomePage: FC = () => {
  const homePage = useLocalization('HOME_PAGE');

  return (
    <ParticlesLayout>
      <ContainerUI className={styles.container}>
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
        <p className={styles.description}>{homePage?.history_description}</p>
        <LinkUI
          href='/history'
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
