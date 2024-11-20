import { FC, Fragment } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './CharityHomePage.module.scss';

const CharityHomePage: FC = () => {
  const homePage = useLocalization('HOME_PAGE');
  return (
    <ParticlesLayout>
      <ContainerUI className={styles.container}>
        <Heading
          className={styles.title}
          heading='h2'
          title={homePage?.military_aid_title || ''}
          shadowTitle={homePage?.military_aid_shadow}
          textColor={EColor.white}
        />
        <Image
          src={homePage?.military_aid_cover.url || ''}
          alt={homePage?.military_aid_title || ''}
          width={288}
          height={192}
          sizes='75vw'
          className={styles.image}
        />
        <p className={styles.description}>
          {homePage?.military_aid_description.split('\n').map((line, index) => (
            <Fragment key={index}>
              {line}
              {index !==
                homePage.military_aid_description.split('\n').length - 1 && (
                <br />
              )}
            </Fragment>
          ))}
        </p>
        <LinkUI
          href='/charity'
          withArrow
          themeColor={EColor.white}
          className={styles.link}
        >
          {homePage?.military_aid_button}
        </LinkUI>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default CharityHomePage;
