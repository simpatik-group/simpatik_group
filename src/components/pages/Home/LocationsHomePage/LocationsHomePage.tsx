import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';
import ListComponent from '@/components/ui/ListComponent/ListComponent';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import { urlPaths } from '@/helpers/urlPath';

import styles from './LocationsHomePage.module.scss';

const LocationsHomePage: FC = () => {
  const locationsData = useLocalization('LOCATIONS');
  const homePage = useLocalization('HOME_PAGE');

  return (
    <section className='pageSection'>
      <ContainerUI className={styles.container}>
        <Heading
          className={styles.title}
          heading='h2'
          title={locationsData?.title || ''}
          shadowTitle={locationsData?.title_shadow}
          textColor={EColor.dark}
        />
        <ol className={styles.list}>
          {locationsData?.location
            .filter((location) => location.position_homepage)
            .sort((a, b) => {
              if (Number(a.position_homepage) < Number(b.position_homepage)) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((location, index) => {
              return (
                <ListComponent
                  key={location.id}
                  title={location.title}
                  description={location.text}
                  url={location.url}
                  counter={index + 1}
                />
              );
            })}
        </ol>
        <LinkUI
          className={styles.allLocations}
          themeColor={EColor.dark}
          withArrow
          href={urlPaths.LOCATIONS}
        >
          {homePage?.location_button}
        </LinkUI>
      </ContainerUI>
    </section>
  );
};

export default LocationsHomePage;
