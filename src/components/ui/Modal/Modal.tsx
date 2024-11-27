'use client';

import { FC, useEffect } from 'react';

import clsx from 'clsx';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';

import styles from './Modal.module.scss';
import { IModalProps } from './Modal.props';

const Modal: FC<IModalProps> = ({
  modalContent,
  toggleActive,
  active,
  className,
}) => {
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <div
      className={clsx(
        className,
        styles.holder,
        active && styles.active,
        modalContent.type === 'success'
          ? styles.success
          : modalContent.type === 'failed'
            ? styles.failed
            : '',
      )}
    >
      <ParticlesLayout className={styles.modal}>
        <img
          alt='close'
          src='/img/close-icon.svg'
          onClick={toggleActive}
          className={styles.close}
        />
        <div>
          {modalContent.type === 'success' ? (
            <span className='h2'>🙂</span>
          ) : modalContent.type === 'failed' ? (
            <span className='h2'>😔</span>
          ) : (
            ''
          )}
          <h4 className={styles.title}>{modalContent.title}</h4>
          <div className={styles.info}>{modalContent.info}</div>
        </div>
      </ParticlesLayout>
    </div>
  );
};

export default Modal;
