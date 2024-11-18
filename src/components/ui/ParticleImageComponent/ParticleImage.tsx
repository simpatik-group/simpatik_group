'use client';

import { FC } from 'react';
import ParticleImage, {
  ParticleForce,
  ParticleOptions,
  Vector,
  forces,
} from 'react-particle-image';

const ParticleImageComponent: FC = () => {
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => '#F1A21E',
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2,
      );
    },
  };
  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };
  return (
    <ParticleImage
      src={'https://i.ibb.co/dmkTVDz/Simpatik-logo-ukr-new-6.png'}
      width={1500}
      height={600}
      scale={2}
      entropy={20}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseDownForce={motionForce}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor='transparent'
      className='w-full'
    />
  );
};

export default ParticleImageComponent;
