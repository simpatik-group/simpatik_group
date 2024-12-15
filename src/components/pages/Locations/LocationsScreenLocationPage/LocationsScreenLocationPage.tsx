import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import ListComponent from '@/components/ui/ListComponent/ListComponent';

import { useMessages } from '@/hooks/useLocalization';

import styles from './LocationsScreenLocationPage.module.scss';

const LocationsScreenLocationPage: FC = () => {
  const locationsPage = useMessages('LOCATIONS');

  return (
    <section className='pageSection'>
      <ContainerUI className={styles.container} withoutGridSystem>
        <ol className={styles.list}>
          {locationsPage?.location.map((location, index) => {
            return (
              <ListComponent
                key={location.id}
                title={location.title}
                description={location.text}
                url={location.url}
                asLink
                counter={index + 1}
              />
            );
          })}
        </ol>
      </ContainerUI>
    </section>
  );
};

export default LocationsScreenLocationPage;
