'use client';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';

import HeroSectionAboutUs from './HeroSectionAboutUs/HeroSectionAboutUs';
import SectionsAboutUs from './SectionsAboutUs/SectionsAboutUs';

const AboutUs = () => {
  return (
    <>
      <AnimateLayout>
        <HeroSectionAboutUs />
      </AnimateLayout>
      <SectionsAboutUs />
    </>
  );
};

export default AboutUs;
