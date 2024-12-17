import { FC } from 'react';

import Link from 'next/link';

import { Breaks } from '@/components/ui/Breacks/Breacks';
import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';

import { useMessages } from '@/hooks/useLocalization';

import styles from './VacanciesCareerPage.module.scss';

const VacanciesCareerPage: FC = () => {
  const careerPage = useMessages('CAREER');
  console.log('🚀 ~ careerPage:', careerPage);

  return (
    <section className={styles.section}>
      <ContainerUI withoutGridSystem>
        <ul>
          {careerPage?.vacancy.map((vacancy) => {
            return (
              <li key={vacancy.id} className={styles.vacancy}>
                <div className={styles.vacancyMain}>
                  <h5 className={styles.vacancyTitle}>{vacancy.title}</h5>
                  <p className={styles.vacancyDescription}>
                    <Breaks description={vacancy?.description || ''} />
                  </p>
                </div>
                <Link
                  href={vacancy.url}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  className={styles.vacancyLink}
                >
                  <ButtonUI design='transparent'>
                    {careerPage.vacancy_button}
                  </ButtonUI>
                </Link>
              </li>
            );
          })}
        </ul>
      </ContainerUI>
    </section>
  );
};

export default VacanciesCareerPage;
