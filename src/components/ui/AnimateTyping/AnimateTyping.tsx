import { type FC, useEffect, useState } from 'react';

import { animate, m, useMotionValue, useTransform } from 'motion/react';

import { EColor } from '@/interfaces/enums';

import CursorBlinker from './CursorBlinker';

interface IAnimTextProps {
  delay: number;
  duration?: number;
  text: string;
  textColor: EColor;
}

const AnimateTyping: FC<IAnimTextProps> = ({
  delay,
  text,
  duration = 4,
  textColor,
}: IAnimTextProps) => {
  const [cursor, setCursor] = useState(false);
  const baseText = text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    setCursor(false);

    const timeout = setTimeout(() => {
      setCursor(true);
      const controls = animate(count, baseText.length, {
        type: 'tween',
        duration: duration,
        delay: 1,
        ease: 'easeInOut',
        onComplete: () => {
          setCursor(false);
        },
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <m.span>{displayText}</m.span>
      {cursor && <CursorBlinker textColor={textColor} />}
    </>
  );
};

export default AnimateTyping;
