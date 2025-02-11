import { FC } from 'react';

import clsx from 'clsx';
import { m } from 'motion/react';

import { EColor } from '@/interfaces/enums';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 0.75,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};
interface ICursorBlinker {
  textColor: EColor;
}

const CursorBlinker: FC<ICursorBlinker> = ({ textColor }) => {
  return (
    <m.span
      variants={cursorVariants}
      animate='blinking'
      className={clsx(
        'inline-block w-[1px] translate-y-1  text-transparent align-text-bottom',
        textColor === EColor.white ? 'bg-white-400' : 'bg-blue-400',
      )}
    >
      i
    </m.span>
  );
};

export default CursorBlinker;
