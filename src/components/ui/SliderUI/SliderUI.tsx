import { FC } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';

import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';

import styles from './SliderUI.module.scss';
import { ISliderUI } from './SloderUI.props';

const SampleNextArrow: FC<CustomArrowProps> = (props) => {
  const { onClick, className } = props;

  return (
    <div className={className} onClick={onClick}>
      <img src='/img/arrow-slide.svg' alt='arrow' />
    </div>
  );
};

const SliderUI: FC<ISliderUI> = ({ className, children, settingsProps }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    ...settingsProps,
  };
  return (
    <div className={clsx(className, styles.slider)}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderUI;
