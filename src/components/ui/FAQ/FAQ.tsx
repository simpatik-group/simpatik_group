import { FC } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useLocalization } from '@/hooks/useLocalization';

import { Breaks } from '@/helpers/breacksModification';

import styles from './FAQ.module.scss';

const FAQ: FC<IDivProps> = ({ className }) => {
  const faqContent = useLocalization('HOME_PAGE');

  return (
    <ParticlesLayout>
      <ContainerUI>
        <div className='md:col-span-6'>
          <Heading
            heading='h2'
            textColor={EColor.white}
            title={faqContent?.fag_title || ''}
            shadowTitle={faqContent?.fag_title_shadow}
            className={styles.title}
          />
          <p className='mb-6'>
            <Breaks description={faqContent?.fag_text || ''} boldParagraphs />
          </p>
          <LinkUI href='/contacts/' themeColor={EColor.white} withArrow>
            {faqContent?.fag_button}
          </LinkUI>
        </div>
        <div className='md:col-span-6'></div>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default FAQ;
