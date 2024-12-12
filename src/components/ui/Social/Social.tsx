import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { IDivProps } from '@/interfaces/interfaces';

import { useMessages } from '@/hooks/useLocalization';

import styles from './Social.module.scss';
import { validateService } from '@/services/validation.service';

const Social: FC<IDivProps> = ({ className }) => {
  const commonContent = useMessages('COMMON');
  const modifyLinkType = (url: string) => {
    switch (true) {
      case validateService.email.test(url):
        return `mailto:${url}`;

      case /^\+?\d{10,}$/.test(url):
        return `tel:${url}`;

      default:
        return url;
    }
  };

  return (
    <div className={clsx(styles.wrap, className)}>
      {commonContent?.social_links.map((social) => {
        return (
          <Link
            key={social.id}
            href={modifyLinkType(social.url)}
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            <img
              src={social.image.url}
              width={40}
              height={40}
              alt={social.title}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
