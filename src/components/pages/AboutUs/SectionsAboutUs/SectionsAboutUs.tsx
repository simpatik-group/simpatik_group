import { FC } from 'react';

import Image from 'next/image';
import clsx from 'clsx';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import { Breaks } from '@/components/ui/Breacks/Breacks';

import { EColor } from '@/interfaces/enums';
import { useMessages } from '@/hooks/useLocalization';

import styles from './SectionsAboutUs.module.scss';

const SectionsAboutUs: FC = () => {
  const aboutUsPage = useMessages('ABOUT_US');
  const imageUrl = (aboutUsPage?.section[0]?.image?.url ? aboutUsPage?.section[0]?.image.url : '');
  return (
    <>
      <section className={'pageSection'}>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.section[0].title || ''}
            shadowTitle={aboutUsPage?.section[0].title_shadow}
            textColor={EColor.dark}
          />
        
          <p className={styles.description}>
            <Breaks description={aboutUsPage?.section[0].text || ''} />
          </p>

          {imageUrl &&
            <Image
              src={imageUrl}
              alt={aboutUsPage?.hero_title || ''}
              width={944}
              height={560}
              className={styles.description}
            />
          }
        </ContainerUI>
      </section>

      <ParticlesLayout>
        <ContainerUI>
          <Heading
            className={clsx(styles.title, styles.titlecenter)}
            heading='h2'
            title={aboutUsPage?.section[1].title || ''}
            shadowTitle={aboutUsPage?.section[1].title_shadow}
            textColor={EColor.white}
          />
          <p className={clsx(styles.description, styles.colStart4)}>
            <Breaks description={aboutUsPage?.section[1].text || ''} />
          </p>
        </ContainerUI>

        <Image
          src={aboutUsPage?.section[1]?.image?.url || ''}
          alt={aboutUsPage?.hero_title || ''}
          width={418}
          height={240}
          sizes='100vw'
          className={styles.cover}
        />

        <section className={'pageSection'}>
          <ContainerUI>
            <Heading
              className={styles.title}
              heading='h2'
              title={aboutUsPage?.section[2].title || ''}
              shadowTitle={aboutUsPage?.section[2].title_shadow}
              textColor={EColor.white}
            />
            <p className={styles.description}>
              <Breaks description={aboutUsPage?.section[2].text || ''} />
            </p>
            <Image
              src={aboutUsPage?.section[2]?.image?.url || ''}
              alt={aboutUsPage?.hero_title || ''}
              width={944}
              height={560}
              className={styles.description}
            />
          </ContainerUI>
        </section>
      </ParticlesLayout>

      <section className={'pageSection'}>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.section[3].title || ''}
            shadowTitle={aboutUsPage?.section[3].title_shadow}
            textColor={EColor.dark}
          />
          <Image
            src={aboutUsPage?.section[3]?.image?.url || ''}
            alt={aboutUsPage?.hero_title || ''}
            width={944}
            height={560}
            className={styles.description}
          />
          <p className={styles.description}>
            <Breaks description={aboutUsPage?.section[3].text || ''} />
          </p>
        </ContainerUI>
      </section>

      <ParticlesLayout>
        <ContainerUI>
          <Heading
            className={clsx(styles.title, styles.titlecenter)}
            heading='h2'
            title={aboutUsPage?.section[4].title || ''}
            shadowTitle={aboutUsPage?.section[4].title_shadow}
            textColor={EColor.white}
          />
          <p className={clsx(styles.description, styles.colStart4)}>
            <Breaks description={aboutUsPage?.section[4].text || ''} />
          </p>
        </ContainerUI>
      </ParticlesLayout>

      <section className={'pageSection'}>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.section[5].title || ''}
            shadowTitle={aboutUsPage?.section[5].title_shadow}
            textColor={EColor.dark}
          />
          <p className={styles.description}>
            <Breaks description={aboutUsPage?.section[5].text || ''} />
          </p>
          <Image
            src={aboutUsPage?.section[5]?.image?.url || ''}
            alt={aboutUsPage?.hero_title || ''}
            width={944}
            height={560}
            className={styles.description}
          />
        </ContainerUI>
      </section>

      <ParticlesLayout>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.section[6].title || ''}
            shadowTitle={aboutUsPage?.section[6].title_shadow}
            textColor={EColor.white}
          />
          <Image
            src={aboutUsPage?.section[6]?.image?.url || ''}
            alt={aboutUsPage?.section[6].title || ''}
            width={944}
            height={560}
            className={styles.description}
          />
          <p className={styles.description}>
            <Breaks description={aboutUsPage?.section[6].text || ''} />
          </p>
        </ContainerUI>

        <Image
          src={aboutUsPage?.section[7]?.image?.url || ''}
          alt={aboutUsPage?.section[7].title || ''}
          width={418}
          height={240}
          sizes='100vw'
          className={styles.cover}
          style={{marginBottom: '40px'}}
        />
        <ContainerUI>
          <Heading
            className={clsx(styles.title, styles.titlecenter)}
            heading='h2'
            title={aboutUsPage?.section[7].title || ''}
            shadowTitle={aboutUsPage?.section[7].title_shadow}
            textColor={EColor.white}
          />
          <p className={clsx(styles.description, styles.colStart4)}>
            <Breaks description={aboutUsPage?.section[7].text || ''} />
          </p>
        </ContainerUI>
      </ParticlesLayout>

      <section className={'pageSection'}>
        <ContainerUI>
          <Heading
            className={styles.title}
            heading='h2'
            title={aboutUsPage?.section[8].title || ''}
            shadowTitle={aboutUsPage?.section[8].title_shadow}
            textColor={EColor.dark}
          />
          <p className={styles.description}>
            <Breaks description={aboutUsPage?.section[8].text || ''} />
          </p>
          <Image
            src={aboutUsPage?.section[8]?.image?.url || ''}
            alt={aboutUsPage?.hero_title || ''}
            width={944}
            height={560}
            className={styles.description}
          />
        </ContainerUI>
      </section>

      <ParticlesLayout>
        <ContainerUI>
          <Heading
            className={clsx(styles.title, styles.titlecenter)}
            heading='h2'
            title={aboutUsPage?.section[9].title || ''}
            shadowTitle={aboutUsPage?.section[9].title_shadow}
            textColor={EColor.white}
          />
          <p className={clsx(styles.description, styles.colStart4)}>
            <Breaks description={aboutUsPage?.section[9].text || ''} />
          </p>
        </ContainerUI>
      </ParticlesLayout>
      <Image
        src={aboutUsPage?.section[9]?.image?.url || ''}
        alt={aboutUsPage?.section[9].title || ''}
        width={418}
        height={240}
        sizes='100vw'
        className={styles.cover}
        style={{marginTop: '0'}}
      />
    </>
  );
};

export default SectionsAboutUs;
