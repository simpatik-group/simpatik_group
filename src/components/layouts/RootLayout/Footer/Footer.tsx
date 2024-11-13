'use client';

import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Social from '@/components/ui/Social/Social';

import styles from './Footer.module.scss';
import { IDivProps } from '@/types/interfaces';

const Footer: FC<IDivProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <ContainerUI>
          <div className={styles.wrap}>
            <Image
              src='/img/logo.svg'
              width={80}
              height={80}
              alt='Simpatik'
              className={styles.logo}
            />
            <div className={styles.footerContacts}>
              <div>
                <h6 className='h6 mb-1'>Адреса:</h6>
                <p>
                  Україна, м. Київ, вул. Ростиславська,{' '}
                  <span className='text-nowrap'>буд. 11</span>
                </p>
              </div>
              <div>
                <h6 className='h6 mb-1'>Телефон:</h6>
                <p>
                  <Link href='tel:044-537-02-37'>(044) 537-02-37</Link>
                </p>
              </div>
              <div>
                <h6 className='h6 mb-1'>Пошта:</h6>
                <p>
                  <Link href='mailto:info@simpatik.com.ua'>
                    info@simpatik.com.ua
                  </Link>
                </p>
              </div>
            </div>
            <Social className='md:justify-self-end' />
          </div>
        </ContainerUI>
      </div>
      <div className={styles.footerBottom}>
        <ContainerUI>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Сімпатік Груп.
          </p>
        </ContainerUI>
      </div>
    </footer>
  );
};

export default Footer;
