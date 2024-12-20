import { FC } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './HeroSectionAboutUs.module.scss';

const HeroSectionAboutUs: FC = () => {
  const aboutUsPage = useMessages('ABOUT_US');
  return (
    <>
      <ParticlesLayout>
        <ContainerUI className={styles.container}>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.hero_title || ''}
            shadowTitle={aboutUsPage?.hero_title_shadow}
            textColor={EColor.white}
          />
        </ContainerUI>
      </ParticlesLayout>

      <Image
        src={aboutUsPage?.hero_image.url || ''}
        alt={aboutUsPage?.hero_title || ''}
        width={418}
        height={240}
        sizes='100vw'
        className={styles.cover}
      />
    </>
  );
};

export default HeroSectionAboutUs;
