import { FC } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import { Breaks } from '@/helpers/breacksModification';

import styles from './SimpatikLifeLifePage.module.scss';

const SimpatikLifeLifePage: FC = () => {
  const lifePage = useMessages('LIFE');
  console.log('🚀 ~ contactsPage:', lifePage);

  return (
    <ParticlesLayout className={styles.wrapper}>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={lifePage?.hero_title || ''}
          shadowTitle={lifePage?.hero_title_shadow}
          textColor={EColor.white}
        />
        <p className={styles.description}>
          <Breaks description={lifePage?.hero_text || ''} />
        </p>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default SimpatikLifeLifePage;
