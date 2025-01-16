'use client';

import AdvantagesLifePage from './Advantages/AdvantagesLifePage';
import LifeScreenLifePage from './LifeScreenLifePage/LifeScreenLifePage';
import NewsLifePage from './NewsLifePage/NewsLifePage';
import VideoLifePage from './VideoLifePage/VideoLifePage';

const Life = () => {
  return (
    <>
      <LifeScreenLifePage />
      <AdvantagesLifePage />
      <VideoLifePage />
      <NewsLifePage />
    </>
  );
};

export default Life;
