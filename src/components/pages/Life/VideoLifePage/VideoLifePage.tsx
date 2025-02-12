import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';

import { useMessages } from '@/hooks/useLocalization';

import styles from './VideoLifePage.module.scss';

const VideoLifePage: FC = () => {
  const lifePage = useMessages('LIFE');
  const url = new URL(lifePage?.video_url || '').pathname;

  return (
    <section>
      <ContainerUI>
        <iframe
          id='ytplayer'
          width='720'
          height='405'
          src={`https://www.youtube-nocookie.com/embed/${url}?color=white&showinfo=0&rel=0&modestbranding=0`}
          frameBorder='0'
          allowFullScreen
          className={styles.video}
        />
      </ContainerUI>
    </section>
  );
};

export default VideoLifePage;
