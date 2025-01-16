import { FC } from 'react';

import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';
import { INewsMessage } from '@/interfaces/news.localizatio';

import { useMessages } from '@/hooks/useLocalization';
import { usePagination } from '@/hooks/usePagination';

import { formatDate } from '@/helpers/formatDate';
import { staticValues } from '@/helpers/staticValues';

import styles from './NewsLifePage.module.scss';
import requestService from '@/services/request.service';

const NewsLifePage: FC = () => {
  const lifePage = useMessages('LIFE');
  const { data: news } = useMessages('ALL_NEWS') as INewsMessage;
  const { meta } = useMessages('ALL_NEWS') as INewsMessage;

  const { articlesList, paginationState, setArticlesList, setPaginationState } =
    usePagination<INewsMessage['data']>(news);

  const dateOption: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const loadMore = async () => {
    const articles = await requestService.getRequest({
      localization: 'uk',
      urls: ['ALL_NEWS'],
      pagination: `&pagination[start]=${paginationState}`,
    });
    if (articles.ALL_NEWS) {
      setArticlesList([...articlesList, ...articles.ALL_NEWS.data]);
      setPaginationState(paginationState + staticValues.PAGINATION_VALUE);
    }
  };

  return (
    <section className='pageSection'>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={lifePage?.news_title || ''}
          shadowTitle={lifePage?.news_title_shadow}
          textColor={EColor.dark}
        />
        <div className={styles.news_wrap}>
          {articlesList &&
            articlesList.map((item) => {
              return (
                <div key={item.id} className={styles.news_item}>
                  <p className={styles.news_date}>
                    {formatDate(item.date, dateOption) || item.date}
                  </p>
                  <h5 className={styles.news_item_title}>{item.title}</h5>
                  <p className={styles.news_description}>{item.description}</p>
                  <LinkUI
                    href={item.url}
                    themeColor={EColor.white}
                    className={styles.news_btn}
                  >
                    <ButtonUI design='transparent'>
                      {lifePage?.readmore_button}
                    </ButtonUI>
                  </LinkUI>
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
            {lifePage?.loadmore_button}
          </ButtonUI>
        )}
      </ContainerUI>
    </section>
  );
};

export default NewsLifePage;
