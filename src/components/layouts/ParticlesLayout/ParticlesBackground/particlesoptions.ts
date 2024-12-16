import { ISourceOptions } from '@tsparticles/engine';

export const particlesLayoutOptions: ISourceOptions = {
  fullScreen: { enable: false, zIndex: -1 },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: { enable: true },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#525151',
    },
    links: {
      color: '#525151',
      distance: 150,
      enable: true,
      opacity: 0.8,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 3,
      straight: false,
      attract: {
        enable: false,
        rotate: { x: 600, y: 1200 },
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
