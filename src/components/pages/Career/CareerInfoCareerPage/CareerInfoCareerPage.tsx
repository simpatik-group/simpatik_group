import { FC } from 'react';

import { Breaks } from '@/components/ui/Breacks/Breacks';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import NumberCounter from '@/components/ui/NumberCounter/NumberCounter';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './CareerInfoCareerPage.module.scss';

const CareerInfoCareerPage: FC = () => {
  const careerPage = useMessages('CAREER');

  return (
    <section className={styles.wrapper}>
      <ContainerUI>
        <div className={styles.careerInfo}>
          <Heading
            className={styles.title}
            heading='h2'
            title={careerPage?.hero_title || ''}
            shadowTitle={careerPage?.hero_title_shadow}
            textColor={EColor.dark}
          />
          <p className={styles.description}>
            <Breaks description={careerPage?.hero_text || ''} boldParagraphs />
          </p>
        </div>
        <div className={styles.careerNumbers}>
          {careerPage?.numbers.map((number) => {
            return (
              <NumberCounter
                key={number.id}
                to={Number(number.number.replace(/\D+/, ''))}
                suffix={number.number.replace(/\d+/, '')}
              >
                {number.text}
              </NumberCounter>
            );
          })}
        </div>
      </ContainerUI>
    </section>
  );
};

export default CareerInfoCareerPage;
