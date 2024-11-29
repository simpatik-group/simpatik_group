import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useMessages } from '@/hooks/useLocalization';

import { Breaks } from '@/helpers/breacksModification';

import styles from './PartnersHomePage.module.scss';

const PartnersHomePage: FC<IDivProps> = () => {
  const homePage = useMessages('HOME_PAGE');

  return (
    <ContainerUI className='mb-5 lg:mb-10'>
      <Heading
        className={styles.title}
        heading='h2'
        title={homePage?.partners_title || ''}
        shadowTitle={homePage?.partners_title_shadow}
        textColor={EColor.dark}
      />
      <p className={styles.description}>
        <Breaks description={homePage?.partners_text || ''} boldParagraphs />
      </p>
    </ContainerUI>
  );
};

export default PartnersHomePage;
