'use client';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';
import FAQ from '@/components/ui/FAQ/FAQ';

import TeamScreenTeamPage from './TeamScreenTeamPage/TeamScreenTeamPage';

const Team = () => {
  return (
    <>
      <AnimateLayout>
        <TeamScreenTeamPage />
      </AnimateLayout>
      <AnimateLayout>
        <FAQ />
      </AnimateLayout>
    </>
  );
};

export default Team;
