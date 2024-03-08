import { getMedia } from './media';

export const AccentColours = {
  pink: '#F535AA',
  orange: '#FF4F09',
  green: '#30FF7F',
  pinkSoft: 'rgba(245, 53, 170, 0.15)',
  orangeSoft: 'rgba(255, 79, 9, 0.15)',
  greenSoft: 'rgba(48, 255, 127, 0.15)',
};

export const DarkAccentColours = {
  pink: '#AF086F',
  orange: '#A83000',
  green: '#006B29',
  pinkSoft: 'rgba(175, 8, 111, 0.15)',
  orangeSoft: 'rgba(168, 48, 0, 0.15)',
  greenSoft: 'rgba(0, 107, 41, 0.15)',
};

const Dark = {
  default: '#111647',
  soft: '#BCC1EB',
  contrast: '#111647',
  defaultBlur: 'rgba(17, 22, 71, 0.75)',
  softBlur: 'rgba(188, 193, 235, 0.75)',
};

const Light = {
  default: '#CCD1FF',
  soft: '#2D3475',
  contrast: '#CCD1FF',
  defaultBlur: 'rgba(204, 209, 255, 0.75)',
  softBlur: 'rgba(17, 22, 71, 0.75)',
};

export const darkTheme = {
  media: getMedia,
  filters: {
    backdrop: 'blur(8px)',
  },
  colors: {
    bg: {
      ...Dark,
    },
    fg: {
      ...Light,
    },
    accent: {
      ...AccentColours,
    },
  },
} as const;

export const lightTheme = {
  media: getMedia,
  filters: {
    backdrop: 'blur(8px)',
  },
  colors: {
    bg: {
      ...Light,
    },
    fg: {
      ...Dark,
    },
    accent: {
      ...DarkAccentColours,
    },
  },
} as const;
