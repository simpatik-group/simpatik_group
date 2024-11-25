import { FC } from 'react';

import Link from 'next/link';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ListComponent from '@/components/ui/ListComponent/ListComponent';
import Social from '@/components/ui/Social/Social';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './InfoContacts.module.scss';

const InfoContacts: FC = () => {
  const commonContent = useLocalization('COMMON');
  const contactsPage = useLocalization('CONTACTS');

  return (
    <ParticlesLayout>
      <ContainerUI className={styles.container}>
        <Heading
          className={styles.title}
          heading='h2'
          title={contactsPage?.title || ''}
          shadowTitle={contactsPage?.title_shadow}
          textColor={EColor.white}
        />
        <ul className={styles.contactsList}>
          <ListComponent
            counter='/img/contacts/location-icon.svg'
            description={commonContent?.address_text || ''}
            title={commonContent?.address_title || ''}
          />
          <ListComponent
            counter='/img/contacts/phone-icon.svg'
            description={
              <Link href={`tel:${commonContent?.phone_text}`}>
                {commonContent?.phone_text}
              </Link>
            }
            title={commonContent?.phone_title || ''}
          />
          <ListComponent
            counter='/img/contacts/email-icon.svg'
            description={
              <Link href={`mailto:${commonContent?.email_text}`}>
                {commonContent?.email_text}
              </Link>
            }
            title={commonContent?.email_title || ''}
          />
          <ListComponent
            counter='/img/contacts/social-icon.svg'
            description={<Social className='!justify-start' />}
            title={commonContent?.social_title || ''}
          />
        </ul>
        <ButtonUI design='solid' className='md:col-span-4 md:col-start-5'>
          {contactsPage?.send_button}
        </ButtonUI>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default InfoContacts;
