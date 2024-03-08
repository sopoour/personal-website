import useThemeSwitch from '@app/hooks/useThemeSwitch';
import { Within } from '@theme-toggles/react';
import { FC } from 'react';
import { styled } from 'styled-components';
import '@theme-toggles/react/css/Within.css';

const Toggle = styled(Within)`
  position: absolute;
  top: 20px;
  svg {
    width: 2rem;
    height: 2rem;

    path {
      fill: ${({ theme }) => theme.colors.fg.default};
    }
  }

  &:hover {
    svg {
      filter: brightness(0.9);
    }
  }
`;

type Props = {
  onClick?: () => void;
};

const ThemeToggle: FC<Props> = ({ onClick }) => {
  const { setTheme, theme } = useThemeSwitch((state) => state);
  return (
    <Toggle
      duration={900}
      title="Theme Switch"
      onToggle={() => {
        setTheme();
        if (onClick) onClick();
      }}
      toggled={theme === 'light'}
    />
  );
};

export default ThemeToggle;
