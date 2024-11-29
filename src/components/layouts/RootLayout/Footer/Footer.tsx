'use client';

import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Social from '@/components/ui/Social/Social';

import { IDivProps } from '@/interfaces/interfaces';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './Footer.module.scss';

const Footer: FC<IDivProps> = () => {
  const commonContent = useLocalization('COMMON');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <ContainerUI withoutGridSystem>
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
                <h6 className='h6 mb-1'>{commonContent?.address_title}</h6>
                <p>{commonContent?.address_text}</p>
              </div>
              <div>
                <h6 className='h6 mb-1'>{commonContent?.phone_title}</h6>
                <p>
                  <Link href={`tel:${commonContent?.phone_text || ''}`}>
                    {commonContent?.phone_text}
                  </Link>
                </p>
              </div>
              <div>
                <h6 className='h6 mb-1'>{commonContent?.email_title}</h6>
                <p>
                  <Link href={`mailto:${commonContent?.email_text}`}>
                    {commonContent?.email_text}
                  </Link>
                </p>
              </div>
            </div>
            <Social className='md:justify-self-end' />
          </div>
        </ContainerUI>
      </div>
      <div className={styles.footerBottom}>
        <ContainerUI withoutGridSystem>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Simpatik Group.
          </p>
        </ContainerUI>
      </div>
    </footer>
  );
};

export default Footer;
