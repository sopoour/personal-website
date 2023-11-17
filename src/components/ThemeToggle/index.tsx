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

const ThemeToggle: FC = () => {
  const { setTheme } = useThemeSwitch((state) => state);
  return <Toggle duration={900} title="Theme Switch" onToggle={setTheme} />;
};

export default ThemeToggle;
