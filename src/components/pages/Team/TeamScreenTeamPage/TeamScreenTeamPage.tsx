import { FC, useEffect, useState } from 'react';
import { Settings } from 'react-slick';

import Image from 'next/image';

import { Breaks } from '@/components/ui/Breacks/Breacks';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import SliderUI from '@/components/ui/SliderUI/SliderUI';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './TeamScreenTeamPage.module.scss';

const TeamScreenTeamPage: FC = () => {
  const teamPage = useMessages('TEAM');

  const [slideWidth, setSlideWidth] = useState(320);
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth > 1200) {
        setSlideWidth(575);
      } else if (window.innerWidth > 992) {
        setSlideWidth(475);
      } else {
        setSlideWidth(320);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const settingsSlider: Settings = {
    infinite: true,
    centerMode: true,
    dots: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <section className={styles.wrapper}>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={teamPage?.hero_title || ''}
          shadowTitle={teamPage?.hero_title_shadow}
          textColor={EColor.dark}
        />
        <p className={styles.description}>
          <Breaks description={teamPage?.hero_text || ''} />
        </p>
        <SliderUI className={styles.slider} settingsProps={settingsSlider}>
          {teamPage?.departments.map((department) => {
            return (
              <div key={department.id} style={{ width: slideWidth }}>
                <div className={styles.innerSlide}>
                  <Image
                    src={department.image.url}
                    alt={department.title}
                    width={560}
                    height={380}
                    className={styles.imageCover}
                  />
                  <h4 className={styles.departmentTitle}>{department.title}</h4>
                  <p className={styles.departmentDescription}>
                    {department.description}
                  </p>
                </div>
              </div>
            );
          })}
        </SliderUI>
      </ContainerUI>
    </section>
  );
};

export default TeamScreenTeamPage;
