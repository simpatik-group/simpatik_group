'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

import AnimateLayout from '@/components/layouts/AnimateLayout/AnimateLayout';
import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor, keyofELocalization } from '@/interfaces/enums';
import { INewsMessage } from '@/interfaces/news.localizatio';

import { useMessages } from '@/hooks/useLocalization';
import { usePagination } from '@/hooks/usePagination';

import { formatDate } from '@/helpers/formatDate';
import { staticValues } from '@/helpers/staticValues';

import styles from './Charity.module.scss';
import requestService from '@/services/request.service';

const Charity = () => {
  const charityPage = useMessages('CHARITY_PAGE');
  const { data: news } = useMessages('ALL_CHARITIES') as INewsMessage;
  const { meta } = useMessages('ALL_CHARITIES') as INewsMessage;
  const locale = useLocale() as keyofELocalization;

  const { articlesList, paginationState, setArticlesList, setPaginationState } =
    usePagination<INewsMessage['data']>(news);

  const dateOption: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const loadMore = async () => {
    const articles = await requestService.getRequest({
      localization: locale,
      urls: ['ALL_NEWS'],
      pagination: `&pagination[start]=${paginationState}`,
    });
    if (articles.ALL_NEWS) {
      setArticlesList([...articlesList, ...articles.ALL_NEWS.data]);
      setPaginationState(paginationState + staticValues.PAGINATION_VALUE);
    }
  };

  return (
    <>
      <section className='pageSection bg-blue-400 relative z-0'>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={charityPage?.hero_title || ''}
            shadowTitle={charityPage?.hero_title_shadow}
            textColor={EColor.white}
          />
        </ContainerUI>
      </section>
      <AnimateLayout>
        <section className='pageSection'>
          <ContainerUI>
            <div className={styles.news_wrap}>
              {articlesList &&
                articlesList.map((item) => {
                  return (
                    <div key={item.id} className={styles.news_item}>
                      {item.cover && (
                        <div className={styles.news_img}>
                          <Image
                            src={item.cover.url}
                            alt={item.title}
                            sizes='(min-width: 768px) 33vw, 100vw'
                            fill
                          />
                        </div>
                      )}
                      <div className={styles.news_text}>
                        <p className={styles.news_date}>
                          {formatDate(item.date, dateOption, locale)}
                        </p>
                        <h5 className={styles.news_item_title}>{item.title}</h5>
                        <p className={styles.news_description}>
                          {item.description}
                        </p>
                        <LinkUI
                          href={item.url}
                          themeColor={EColor.white}
                          className={styles.news_btn}
                        >
                          <ButtonUI design='transparent'>
                            {charityPage?.readmore_button}
                          </ButtonUI>
                        </LinkUI>
                      </div>
                    </div>
                  );
                })}
            </div>
            {paginationState < meta.pagination.total && (
              <ButtonUI
                className={styles.more_news_btn}
                design='solid'
                onClick={loadMore}
              >
                {charityPage?.loadmore_button}
              </ButtonUI>
            )}
          </ContainerUI>
        </section>
      </AnimateLayout>
    </>
  );
};

export default Charity;
