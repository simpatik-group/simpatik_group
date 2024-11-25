import { FC } from 'react';

import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import InputUI from '@/components/ui/InputTextareaUI/InputUI';
import TextareaUI from '@/components/ui/InputTextareaUI/TextareaUI';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './FormContacts.module.scss';

const FormContacts: FC = () => {
  const contactsPage = useLocalization('CONTACTS');
  console.log('🚀 ~ contactsPage:', contactsPage);

  return (
    <section className='pageSection pb-0'>
      <ContainerUI className={styles.container} id='contactForm'>
        <Heading
          className={styles.title}
          heading='h2'
          title={contactsPage?.form_title || ''}
          shadowTitle={contactsPage?.form_title_shadow}
          textColor={EColor.dark}
        />
        <form action='' className={styles.form}>
          <ContainerUI withoutGridSystem className='gap-y-4 md:grid-cols-12'>
            <div className={styles.group}>
              <InputUI
                labelText={contactsPage?.form_name}
                placeholder={contactsPage?.input_name}
                required
              />
              <InputUI
                labelText={contactsPage?.form_phone}
                placeholder={contactsPage?.input_phone}
                type='tel'
                required
              />
              <InputUI
                labelText={
                  <>
                    {contactsPage?.form_email.replace(/\(([^)]+)\)/, '')}{' '}
                    <span className='smallTxt'>
                      {' '}
                      {contactsPage?.form_email.replace(/^[^(]*\(/, '(')}
                    </span>
                  </>
                }
                placeholder={contactsPage?.input_email}
                type='email'
              />
            </div>
            <div className={styles.group}>
              <TextareaUI
                labelText={contactsPage?.form_message}
                placeholder={contactsPage?.input_message}
                required
                rows={5}
              />
              <ButtonUI className='self-end'>
                {contactsPage?.form_send_button}
              </ButtonUI>
            </div>
          </ContainerUI>
        </form>
      </ContainerUI>
    </section>
  );
};

export default FormContacts;
