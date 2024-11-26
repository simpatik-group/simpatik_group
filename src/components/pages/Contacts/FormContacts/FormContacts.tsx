import { FC, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import InputUI from '@/components/ui/InputTextareaUI/InputUI';
import TextareaUI from '@/components/ui/InputTextareaUI/TextareaUI';

import { EColor } from '@/interfaces/enums';

import { useForm } from '@/hooks/useForm';
import { useLocalization } from '@/hooks/useLocalization';

import styles from './FormContacts.module.scss';
import { validateService } from '@/services/validation.service';

interface IContactForm {
  name: string;
  email?: string;
  phone: string;
  recaptcha: string;
  message: string;
}

const initialValues: IContactForm = {
  name: '',
  message: '',
  phone: '',
  recaptcha: '',
};

const FormContacts: FC = () => {
  const contactsPage = useLocalization('CONTACTS');

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { errors, register, handleSubmit, isSubmitting, values } =
    useForm<IContactForm>({ initialValues });
  console.log(process.env.RECAPTCHA);
  const onSubmit = async (data: IContactForm) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    if (!recaptchaToken) {
      alert('ReCAPTCHA verification failed');
      values.recaptcha = '';
      return;
    }
    values.recaptcha = recaptchaToken;
    console.log('🚀 ~ onSubmit ~ values:', values);
    // values = initialValues; треба скинути до дефолтного стану
  };

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
        <form
          noValidate
          action=''
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <ContainerUI withoutGridSystem className='gap-y-4 md:grid-cols-12'>
            <div className={styles.group}>
              <InputUI
                {...register('name', {
                  required: true,
                  pattern: validateService.name,
                })}
                error={errors.name}
                labelText={contactsPage?.form_name}
                placeholder={contactsPage?.input_name}
              />
              <InputUI
                {...register('phone', {
                  required: true,
                  pattern: validateService.phone,
                })}
                error={errors.phone}
                labelText={contactsPage?.form_phone}
                placeholder={contactsPage?.input_phone}
                type='tel'
              />
              <InputUI
                {...register('email', {
                  pattern: validateService.email,
                })}
                error={errors.email}
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
                {...register('message', {
                  required: true,
                  pattern: validateService.message,
                })}
                error={errors.message}
                labelText={contactsPage?.form_message}
                placeholder={contactsPage?.input_message}
                rows={5}
              />
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_FRONT as string}
                size='invisible'
              />
              <ButtonUI
                className='self-end'
                type='submit'
                disabled={isSubmitting}
              >
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
