'use client';

import { FC } from 'react';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';
import FAQ from '@/components/ui/FAQ/FAQ';

import CharityHomePage from './CharityHomePage/CharityHomePage';
import FeedbacksHomePage from './FeedbacksHomePage/FeedbacksHomePage';
import HistoryHomePage from './HistoryHomePage/HistoryHomePage';
import InspireHomePage from './InspireHomePage/InspireHomePage';
import LocationsHomePage from './LocationsHomePage/LocationsHomePage';
import NumbersHomePage from './NumbersHomePage/NumbersHomePage';
import PartnersHomePage from './PartnersHomePage/PartnersHomePage';

const Home: FC = () => {
  return (
    <>
      <AnimateLayout>
        <InspireHomePage />
      </AnimateLayout>
      <AnimateLayout>
        <LocationsHomePage />
      </AnimateLayout>
      <AnimateLayout>
        <HistoryHomePage />
      </AnimateLayout>
      <AnimateLayout>
        <NumbersHomePage />
      </AnimateLayout>
      <AnimateLayout>
        <CharityHomePage />
      </AnimateLayout>
      <section className='pageSection'>
        <AnimateLayout>
          <PartnersHomePage />
        </AnimateLayout>
        <AnimateLayout>
          <FeedbacksHomePage />
        </AnimateLayout>
      </section>
      <AnimateLayout>
        <FAQ />
      </AnimateLayout>
    </>
  );
};

export default Home;
