import { FC } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import { Breaks } from '@/components/ui/Breacks/Breacks';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import LinkUI from '@/components/ui/LinkUI/LinkUI';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useMessages } from '@/hooks/useLocalization';

import { urlPaths } from '@/helpers/urlPath';

import AccordionItem from '../AccardioneItem/AccordionItem';

import styles from './FAQ.module.scss';

const FAQ: FC<IDivProps> = () => {
  const faqContent = useMessages('HOME_PAGE');
  // TODO rewrite to get message from parent
  return (
    <ParticlesLayout id='FAQ'>
      <ContainerUI>
        <div className='md:col-span-6 mb-8 md:mb-0'>
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
          <LinkUI
            href={{
              pathname: urlPaths.CONTACTS,
              query: { id: urlPaths.CONTACT_FORM },
            }}
            themeColor={EColor.white}
            withArrow
          >
            {faqContent?.fag_button}
          </LinkUI>
        </div>
        <ul className='md:col-span-6 grid gap-y-4 self-baseline md:mt-7 lg:mt-14'>
          {faqContent?.fag.map((item, index) => {
            return (
              <AccordionItem
                key={item.id}
                accordionTitle={
                  <span>
                    {<span className={styles.number}>{index + 1 + '. '}</span>}
                    {item.fag_question}
                  </span>
                }
                accordionDescription={item.faq_answer}
              />
            );
          })}
        </ul>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default FAQ;
