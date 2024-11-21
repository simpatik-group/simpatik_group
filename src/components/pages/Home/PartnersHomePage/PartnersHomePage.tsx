import { FC, Fragment } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './PartnersHomePage.module.scss';

const PartnersHomePage: FC<IDivProps> = () => {
  const homePage = useLocalization('HOME_PAGE');

  return (
    <ContainerUI className='mb-5 lg:mb-10'>
      <Heading
        className={styles.title}
        heading='h2'
        title={homePage?.partners_title || ''}
        shadowTitle={homePage?.partners_title_shadow}
        textColor={EColor.dark}
      />
      {/* <p className={styles.description}>{homePage?.partners_text}</p> */}
      <p className={styles.description}>
        {homePage?.partners_text.split('\n').map((line, index) => (
          <Fragment key={index}>
            {index !== homePage.partners_text.split('\n').length - 1 ? (
              <>
                {line}
                <br />
              </>
            ) : (
              <span className='font-semibold'>{line}</span>
            )}
          </Fragment>
        ))}
      </p>
    </ContainerUI>
  );
};

export default PartnersHomePage;
