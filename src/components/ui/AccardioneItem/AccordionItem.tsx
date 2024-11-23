import { FC, useState } from 'react';

import styles from './AccordionItem.module.scss';
import { IAccordionItemProps } from './AccordionItem.props';

const AccordionItem: FC<IAccordionItemProps> = ({
  index,
  accordionDescription,
  accordionTitle,
  className,
  ...props
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li {...props} className={active ? styles.active : undefined}>
      <h6 className={styles.title} onClick={() => setActive(!active)}>
        {accordionTitle}
        <img
          src='/img/arrow-accordion.svg'
          alt='arrow'
          loading='lazy'
          className={styles.titleArrow}
        />
      </h6>
      <div className={styles.panel}>{accordionDescription}</div>
    </li>
  );
};

export default AccordionItem;
