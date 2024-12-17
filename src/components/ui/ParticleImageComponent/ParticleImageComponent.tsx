'use client';

import { FC } from 'react';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
} from 'react-particle-image';

import { IDivProps } from '@/interfaces/interfaces';

const ParticleImageComponent: FC<IDivProps> = ({ className }) => {
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.a > 50;
    },
    color: ({ x, y, image }) => '#fff',
    radius: () => Math.random() * 0.05 + 1,
    mass: () => 20,
    friction: () => 0.35,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2,
      );
    },
  };

  return (
    <ParticleImage
      src={'/img/logo-noText.png'}
      scale={2.5}
      entropy={5}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
      touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
      mouseDownForce={(x, y) => forces.disturbance(x, y, 100)}
      backgroundColor='transparent'
      className={className}
    />
  );
};

export default ParticleImageComponent;

//   const mouseDownForce = (x: number, y: number): ParticleForce => {
//   return (particle) => {
//     const disturbance = forces.disturbance(x, y, 50)(particle);
//     const entropy = forces.entropy(0)(particle);
//     particle.friction = 0.1;
//     return {
//       x: (disturbance?.x || 0) + (entropy?.x || 0),
//       y: (disturbance?.y || 0) + (entropy?.y || 0),
//     };
//   };
// };
