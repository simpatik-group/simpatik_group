import { FC, useCallback, useEffect, useState } from 'react';

import { Container, Engine } from '@tsparticles/engine';
import Particles, {
  IParticlesProps,
  initParticlesEngine,
} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import styles from './ParticlesBackground.module.scss';
import { particlesLayoutOptions } from './particlesoptions';

const ParticlesBackground: FC<IParticlesProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    return Promise.resolve();
  }, []);

  useEffect(() => {
    initParticlesEngine(particlesInit).then(() => {
      setInit(true);
    });
  }, []);
  return init ? (
    <Particles
      id={`${id}Particles`}
      options={particlesLayoutOptions}
      className={styles.particles}
      particlesLoaded={particlesLoaded}
    />
  ) : null;
};

export default ParticlesBackground;
