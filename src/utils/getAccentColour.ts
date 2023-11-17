import { AccentColours } from '@app/styles/theme';

const titleColours = [AccentColours.pink, AccentColours.green, AccentColours.orange];

const getAccentColour = (index: number) => titleColours[index % 3];

export default getAccentColour;
