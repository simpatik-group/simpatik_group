import { FC } from 'react';
import { Settings } from 'react-slick';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ListComponent from '@/components/ui/ListComponent/ListComponent';
import SliderUI from '@/components/ui/SliderUI/SliderUI';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './AdvantagesLifePage.module.scss';

const AdvantagesLifePage: FC = () => {
  const lifePage = useMessages('LIFE');
  const settingsSlider: Settings = {
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <section className='pageSection'>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={lifePage?.advantages_title || ''}
          shadowTitle={lifePage?.advantages_title_shadow}
          textColor={EColor.dark}
        />
        <SliderUI
          className={styles.advantageSlider}
          settingsProps={settingsSlider}
        >
          {lifePage?.advantages.map((advantage, i) => {
            return (
              <div key={advantage.id}>
                <ListComponent
                  counter={i + 1}
                  title={advantage.title}
                  description={advantage.text}
                  tag='div'
                  className={styles.item}
                />
              </div>
            );
          })}
        </SliderUI>
      </ContainerUI>
    </section>
  );
};

export default AdvantagesLifePage;
