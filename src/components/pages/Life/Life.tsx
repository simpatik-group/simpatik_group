'use client';

import { useMessages } from '@/hooks/useLocalization';

import AdvantagesLifePage from './Advantages/AdvantagesLifePage';
import SimpatikLifeLifePage from './SimpatikLifeLifePage/SimpatikLifeLifePage';
import VideoLifePage from './VideoLifePage/VideoLifePage';

const Life = () => {
  const lifePage = useMessages('LIFE');
  return (
    <>
      <SimpatikLifeLifePage />
      <AdvantagesLifePage />
      <VideoLifePage />
    </>
  );
};

export default Life;
