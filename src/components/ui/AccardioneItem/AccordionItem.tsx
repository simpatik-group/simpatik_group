import { FC, useState } from 'react';

import clsx from 'clsx';

import styles from './AccordionItem.module.scss';
import { IAccordionItemProps } from './AccordionItem.props';

const AccordionItem: FC<IAccordionItemProps> = ({ className, ...props }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li onClick={() => setActive(!active)} {...props}>
      <div className={styles.faqQuestion}>
        <p>
          {index && (
            <span className={clsx('primary', styles.faqQuestionNumber)}>
              {index + '. '}
            </span>
          )}
          {faqItem[0]}
        </p>
        <img
          src='/img/arrow-accordion.svg'
          alt='arrow'
          loading='lazy'
          className={styles.faqQuestionArrow}
        />
      </div>
      <p className={styles.faqAnswer}>{faqItem[1]}</p>
    </li>
  );
};

export default AccordionItem;
