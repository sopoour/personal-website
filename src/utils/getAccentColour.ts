import theme from '@app/styles/theme';

const titleColours = [
  theme.colors.accent.pink,
  theme.colors.accent.green,
  theme.colors.accent.orange,
];

const getAccentColour = (index: number) => titleColours[index % 3];

export default getAccentColour;
