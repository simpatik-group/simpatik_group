import { ChangeEvent, FC, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import ButtonUI from '@/components/ui/ButtonUI/ButtonUI';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import InputUI from '@/components/ui/InputTextareaUI/InputUI';
import TextareaUI from '@/components/ui/InputTextareaUI/TextareaUI';
import Loader from '@/components/ui/Loader/Loader';
import Modal from '@/components/ui/Modal/Modal';
import { IModalContent } from '@/components/ui/Modal/Modal.props';

import { EColor } from '@/interfaces/enums';
import { IMessageUs } from '@/interfaces/messageUs.request';

import { useForm } from '@/hooks/useForm';
import { useMessages } from '@/hooks/useLocalization';

import { Breaks } from '@/helpers/breacksModification';
import { formatPhoneNumber } from '@/helpers/formatInput';
import { urlPaths } from '@/helpers/urlPath';

import styles from './FormContacts.module.scss';
import requestService from '@/services/request.service';
import { validateService } from '@/services/validation.service';

const initialValues: IMessageUs = {
  name: '',
  message: '',
  phone: '',
  recaptcha: '',
};
const initialModalValues: IModalContent = {
  title: '',
  info: '',
};

const FormContacts: FC = () => {
  const contactsPage = useMessages('CONTACTS');

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(initialModalValues);

  const {
    errors,
    register,
    handleSubmit,
    setValues,
    isSubmitting,
    setIsSubmitting,
    values,
    setErrors,
  } = useForm<IMessageUs>({ initialValues });

  const onSubmit = async (data: IMessageUs) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    setIsSubmitting(true);
    if (!recaptchaToken) {
      values.recaptcha = '';
      return;
    }
    values.recaptcha = recaptchaToken;
    requestService
      .postRequest({
        url: 'MESSAGE_US',
        options: { method: 'POST', body: values },
      })
      .then((res) => {
        setModalContent({
          type: 'success',
          title: contactsPage?.popup_success_title || '',
          info: <Breaks description={contactsPage?.popup_success_text || ''} />,
        });
        setValues({ ...initialValues });
      })
      .catch((err) => {
        console.log(err);
        setModalContent({
          type: 'failed',
          title: contactsPage?.popup_problem_title || '',
          info: <Breaks description={contactsPage?.popup_problem_text || ''} />,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        setModalActive(true);
      });
  };

  const changePhoneValue = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);

    setErrors((prev) => ({ ...prev, phone: false }));
    setValues((prev) => ({ ...prev, phone: formattedValue }));
  };

  return (
    <section className='pageSection pb-0'>
      <Modal
        active={modalActive}
        modalContent={modalContent}
        toggleActive={() => setModalActive(!modalActive)}
      />
      {isSubmitting && <Loader transparent />}
      <ContainerUI className={styles.container} id={urlPaths.CONTACT_FORM}>
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
                onChange={changePhoneValue}
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
