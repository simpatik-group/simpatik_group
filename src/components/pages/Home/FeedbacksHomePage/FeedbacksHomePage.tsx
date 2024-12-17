import { FC } from 'react';
import { Settings } from 'react-slick';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import SliderUI from '@/components/ui/SliderUI/SliderUI';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useMessages } from '@/hooks/useLocalization';

import styles from './FeedbacksHomePage.module.scss';

const FeedbacksHomePage: FC<IDivProps> = () => {
  const homePage = useMessages('HOME_PAGE');
  const settingsFeedbacks: Settings = {
    variableWidth: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          adaptiveHeight: true,
          variableWidth: false,
        },
      },
    ],
  };
  const settingsPartners1: Settings = {
    draggable: false,
    swipe: false,
    touchMove: false,
    pauseOnHover: true,
    variableWidth: true,
    centerMode: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 3000,
    cssEase: 'ease-in-out',
  };

  return (
    <ContainerUI>
      <Heading
        className={styles.title}
        heading='h2'
        title={homePage?.feedback_title || ''}
        shadowTitle={homePage?.feedback_title_shadow}
        textColor={EColor.dark}
      />
      <SliderUI className='mb-20' settingsProps={settingsFeedbacks}>
        {homePage?.feedbacks.map((feedback) => {
          return (
            <div
              key={feedback.id}
              style={{ width: 370 }}
              className={styles.feedbackSlide}
            >
              <div>
                <img src='/img/quote-icon.svg' alt='quote' />
                <p className={styles.feedbackText}>
                  {feedback.feedback_content}
                </p>
                <h6 className={styles.feedback_person}>
                  {feedback.feedback_person}
                </h6>
                <p className={styles.feedbackPosition}>
                  {feedback.feedback_company}
                </p>
              </div>
            </div>
          );
        })}
      </SliderUI>
      <SliderUI
        className={styles.partnersSlider}
        settingsProps={settingsPartners1}
      >
        {homePage?.partner_logos.map((partner) => (
          <img
            src={partner.url}
            alt='logo'
            loading='lazy'
            key={partner.id}
            style={{ width: 222 }}
            className={styles.partnersSlide}
          />
        ))}
      </SliderUI>
    </ContainerUI>
  );
};

export default FeedbacksHomePage;
