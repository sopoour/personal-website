import { getMedia } from './media';

const theme = {
  media: getMedia,
  colors: {
    bg: {
      default: '#111647',
      soft: '#BCC1EB',
    },
    fg: {
      default: '#FFFFFF',
      contrast: '#000000',
      inactive: 'rgba(255, 255, 255, 0.75)',
    },
    accent: {
      pink: '#F535AA',
      orange: '#FF4F09',
      green: '#30FF7F',
      pinkSoft: 'rgba(245, 53, 170, 0.15)',
      orangeSoft: 'rgba(255, 79, 9, 0.15)',
      greenSoft: 'rgba(48, 255, 127, 0.15)',
    },
  },
} as const;

export default theme;
