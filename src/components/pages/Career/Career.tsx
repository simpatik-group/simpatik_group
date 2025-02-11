'use client';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';

import CareerInfoCareerPage from './CareerInfoCareerPage/CareerInfoCareerPage';
import VacanciesCareerPage from './VacanciesCareerPage/VacanciesCareerPage';

const Career = () => {
  return (
    <>
      <AnimateLayout>
        <CareerInfoCareerPage />
      </AnimateLayout>
      <AnimateLayout>
        <VacanciesCareerPage />
      </AnimateLayout>
    </>
  );
};

export default Career;
