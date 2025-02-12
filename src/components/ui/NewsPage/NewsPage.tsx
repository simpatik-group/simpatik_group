'use client';

import { useEffect } from 'react';
import { Settings } from 'react-slick';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';
import SliderUI from '@/components/ui/SliderUI/SliderUI';

import { EColor, keyofELocalization } from '@/interfaces/enums';
import { INewsInstantMessage } from '@/interfaces/newsInstanse.localization';

import { useMessages } from '@/hooks/useLocalization';

import { createNewsLocalizations } from '@/helpers/createNewsLocalizations';
import { formatDate } from '@/helpers/formatDate';
import { addCookie } from '@/helpers/helperCookie';
import { staticValues } from '@/helpers/staticValues';

import ContainerUI from '../ContainerUI/ContainerUI';
import Heading from '../Heading/Heading';
import RichTextParser from '../RichTextParser/RichTextParser';

import styles from './NewsPage.module.scss';

interface NewsPageProps<Key> {
  messageKey: Key;
}

const NewsPage = <Key extends 'CHARITY_INSTANCE' | 'NEWS_INSTANCE'>({
  messageKey,
}: NewsPageProps<Key>) => {
  const messages = useMessages(messageKey) as INewsInstantMessage;
  const newsMessage = messages[0];

  let videoUrl: string | undefined;
  if (newsMessage?.video_url.includes('youtu.be')) {
    videoUrl = new URL(newsMessage.video_url).pathname;
  }

  const locale = useLocale() as keyofELocalization;
  const dateOption: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  useEffect(() => {
    if (newsMessage.localizations.length > 0) {
      const cookieBody = createNewsLocalizations(newsMessage.localizations);
      addCookie({
        name: staticValues.COOKIE_LOCALIZATION_NEWS,
        value: cookieBody,
      });
    } else {
      addCookie({
        name: staticValues.COOKIE_LOCALIZATION_NEWS,
        value: '',
      });
    }
  }, [newsMessage]);

  const sliderSettings: Settings = {
    dots: false,
    variableWidth: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1321,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <>
      <section className='pageSection bg-blue-400 pb-0 relative z-0 text-center '>
        <ContainerUI withoutGridSystem className='md:grid-cols-1'>
          <Heading
            className={styles.title}
            heading='h3'
            title={newsMessage.title || ''}
            textColor={EColor.white}
            withTyping
          />
          <p className={styles.news_date}>
            {formatDate(newsMessage.date, dateOption, locale)}
          </p>
        </ContainerUI>
        {newsMessage.cover && (
          <div className={styles.news_img}>
            <Image
              src={newsMessage.cover.url}
              alt={newsMessage.title}
              sizes='100vw'
              fill
            />
          </div>
        )}
      </section>
      <AnimateLayout>
        <section className='pageSection pt-4 md:pt-12'>
          <ContainerUI withoutGridSystem className='md:grid-cols-1'>
            {newsMessage.content.map((item, i) => (
              <RichTextParser key={i} node={item} />
            ))}
          </ContainerUI>
        </section>
      </AnimateLayout>
      {videoUrl && (
        <AnimateLayout>
          <ContainerUI>
            <iframe
              id='ytplayer'
              width='720'
              height='405'
              src={`https://www.youtube-nocookie.com/embed/${videoUrl}?color=white&showinfo=0&rel=0&modestbranding=0`}
              frameBorder='0'
              allowFullScreen
              className={styles.video}
            />
          </ContainerUI>
        </AnimateLayout>
      )}
      {newsMessage.photos && (
        <AnimateLayout>
          <section className='pageSection'>
            <ContainerUI withoutGridSystem className='md:grid-cols-1'>
              <Heading
                heading='h3'
                title={newsMessage.photos_title}
                shadowTitle={newsMessage.photos_title_shadow}
                textColor={EColor.dark}
                className={clsx(styles.title, '!text-left')}
              />
              <SliderUI
                className={styles.slider}
                settingsProps={sliderSettings}
              >
                {newsMessage.photos.map((photo) => (
                  <div
                    className={styles.slide}
                    key={photo.id}
                    style={{ width: 400 }}
                  >
                    <div>
                      <Image
                        src={photo.url}
                        alt={'photo ' + photo.id}
                        fill
                        sizes='(min-width: 768px) 33vw, 100vw'
                      />
                    </div>
                  </div>
                ))}
              </SliderUI>
            </ContainerUI>
          </section>
        </AnimateLayout>
      )}
    </>
  );
};

export default NewsPage;
