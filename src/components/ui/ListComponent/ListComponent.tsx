'use client';

import { FC, createElement } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import { decimalsModification } from '@/helpers/decimalsModification';

import LinkUI from '../LinkUI/LinkUI';

import styles from './ListComponent.module.scss';
import { IListComponent } from './ListComponent.props';

const ListComponent: FC<IListComponent> = ({
  title,
  description,
  url,
  counter,
  withSlider,
  className,
  tag = 'li',
  ...props
}) => {
  return createElement(
    tag,
    {
      className: clsx(styles.item, className),
      ...props,
    },
    <>
      {typeof counter === 'string' ? (
        <img src={counter} alt={title} className={styles.counter} />
      ) : (
        <span className={clsx(styles.counter, styles.number)}>
          {decimalsModification(counter)}
        </span>
      )}
      <h5 className={styles.title}>{title}</h5>
      <div>{description}</div>
      {url && (
        <LinkUI
          href={url}
          themeColor={EColor.dark}
          withArrow
          className={styles.link}
        />
      )}
    </>,
  );
};

export default ListComponent;
