import { FC, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { animate, m, useInView, useMotionValue } from 'motion/react';

import styles from './NumberCounter.module.scss';
import { INumberCounterProps } from './NumberCounter.props';

const NumberCounter: FC<INumberCounterProps> = ({
  from = 0,
  to,
  suffix,
  className,
  children,
}) => {
  const count = useMotionValue(from);
  const [displayCount, setDisplayCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: 'easeOut' });

      return () => controls.stop();
    }
  }, [isInView, count, to]);

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplayCount(Math.round(latest));
    });

    return () => unsubscribe();
  }, [count]);

  return (
    <div ref={ref} className={clsx(className)}>
      <m.span className={styles.number}>{displayCount}</m.span>
      {suffix && <span className={styles.suffix}>{suffix}</span>}
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default NumberCounter;
