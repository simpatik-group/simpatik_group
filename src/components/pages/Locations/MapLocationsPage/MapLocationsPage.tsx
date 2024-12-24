import { FC } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './MapLocationsPage.module.scss';

const MapLocationsPage: FC = () => {
  const locationsPage = useMessages('LOCATIONS');
  console.log('🚀 ~ contactsPage:', locationsPage);

  return (
    <>
      <ParticlesLayout className={styles.wrapper} id='MapLocationsPage'>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={locationsPage?.title || ''}
            shadowTitle={locationsPage?.title_shadow}
            textColor={EColor.white}
          />
        </ContainerUI>
      </ParticlesLayout>
      <picture>
        <source srcSet='/img/map--desk.jpg' media='(min-width: 768px)' />
        <source srcSet='/img/map.jpg' media='(max-width: 767.99px)' />
        <Image
          src='/img/map--desk.jpg' // Fallback image
          alt='Simpatik locations'
          sizes='100vw'
          loading='lazy'
          height={718}
          width={1920}
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    </>
  );
};

export default MapLocationsPage;
