import { AccentColours, DarkAccentColours } from '@app/styles/theme';
import useThemeSwitch from './useThemeSwitch';

const useAccentColour = (keepBright?: boolean) => {
  const { theme } = useThemeSwitch((state) => state);
  const AccentColourTheme = theme === 'light' && !keepBright ? DarkAccentColours : AccentColours;

  const titleColours = [AccentColourTheme.pink, AccentColourTheme.green, AccentColourTheme.orange];

  const getAccentColour = (index: number) => titleColours[index % 3];

  return {
    AccentColourTheme,
    getAccentColour,
  };
};

export default useAccentColour;
