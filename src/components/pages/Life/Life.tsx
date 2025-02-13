'use client';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';

import AdvantagesLifePage from './Advantages/AdvantagesLifePage';
import LifeScreenLifePage from './LifeScreenLifePage/LifeScreenLifePage';
import NewsLifePage from './NewsLifePage/NewsLifePage';
import VideoLifePage from './VideoLifePage/VideoLifePage';

const Life = () => {
  return (
    <>
      <AnimateLayout>
        <LifeScreenLifePage />
      </AnimateLayout>
      <AnimateLayout>
        <AdvantagesLifePage />
      </AnimateLayout>
      <AnimateLayout>
        <VideoLifePage />
      </AnimateLayout>
      <AnimateLayout>
        <NewsLifePage />
      </AnimateLayout>
    </>
  );
};

export default Life;
