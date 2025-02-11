import { FC } from 'react';

import dynamic from 'next/dynamic';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import Loader from '@/components/ui/Loader/Loader';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './MapLocationsPage.module.scss';

const MapDynamic = dynamic(() => import('@/components/ui/Map/Map'), {
  ssr: false,
  loading: () => <Loader />,
});

const MapLocationsPage: FC = () => {
  const locationsPage = useMessages('LOCATIONS');

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
            withTyping
          />
        </ContainerUI>
      </ParticlesLayout>
      <MapDynamic />
    </>
  );
};

export default MapLocationsPage;
