import { FC } from 'react';

import { useMessages } from '@/hooks/useLocalization';

import styles from './VideoLifePage.module.scss';

const VideoLifePage: FC = () => {
  const lifePage = useMessages('LIFE');
  return (
    <section className='pageSection'>
      <iframe
        id='ytplayer'
        width='720'
        height='405'
        src='https://www.youtube.com/embed/AK_rUXKZixI?color=white&showinfo=0&rel=0&modestbranding=0'
        frameBorder='0'
        allowFullScreen
        className={styles.video}
      />
    </section>
  );
};

export default VideoLifePage;
