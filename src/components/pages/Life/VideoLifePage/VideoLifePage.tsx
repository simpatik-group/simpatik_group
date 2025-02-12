import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';

import { useMessages } from '@/hooks/useLocalization';

import styles from './VideoLifePage.module.scss';

const VideoLifePage: FC = () => {
  const lifePage = useMessages('LIFE');

  let videoUrl: string | undefined;
  if (
    lifePage &&
    lifePage.video_url &&
    lifePage.video_url.includes('youtu.be')
  ) {
    videoUrl = new URL(lifePage.video_url).pathname;
  }
  if (!videoUrl) return null;

  return (
    <section>
      <ContainerUI>
        <iframe
          id='ytplayer'
          width='720'
          height='405'
          src={`https://www.youtube-nocookie.com/embed/${videoUrl}?color=white&showinfo=0&rel=0&modestbranding=0`}
          frameBorder='0'
          allowFullScreen
          className={styles.video}
        />
      </ContainerUI>
    </section>
  );
};

export default VideoLifePage;
