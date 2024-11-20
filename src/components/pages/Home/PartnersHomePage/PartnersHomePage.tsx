import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './PartnersHomePage.module.scss';

const PartnersHomePage: FC<IDivProps> = () => {
  const homePage = useLocalization('HOME_PAGE');

  return (
    <ContainerUI>
      <Heading
        className={styles.title}
        heading='h2'
        title={homePage?.partners_title || ''}
        shadowTitle={homePage?.partners_title_shadow}
        textColor={EColor.dark}
      />
      <p className={styles.description}>{homePage?.partners_text}</p>
    </ContainerUI>
  );
};

export default PartnersHomePage;
