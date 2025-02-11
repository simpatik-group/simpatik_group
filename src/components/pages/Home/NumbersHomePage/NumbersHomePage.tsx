import { FC } from 'react';

import { motion } from 'motion/react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import NumberCounter from '@/components/ui/NumberCounter/NumberCounter';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useMessages } from '@/hooks/useLocalization';

import styles from './NumbersHomePage.module.scss';

const NumbersHomePage: FC<IDivProps> = () => {
  const homePage = useMessages('HOME_PAGE');

  return (
    <section className='pageSection'>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={homePage?.numbers_title || ''}
          shadowTitle={homePage?.numbers_title_shadow}
          textColor={EColor.dark}
        />
        <motion.div
          className={styles.numbers}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {homePage?.numbers.map((number) => {
            return (
              <NumberCounter
                key={number.id}
                to={Number(number.number.replace(/\D+/, ''))}
                suffix={number.number.replace(/\d+/, '')}
              >
                {number.text}
              </NumberCounter>
            );
          })}
        </motion.div>
      </ContainerUI>
    </section>
  );
};

export default NumbersHomePage;
