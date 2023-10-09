import Typography from '@app/components/Typography/Typography';
import theme from '@app/styles/theme';
import React from 'react';
import { styled } from 'styled-components';
import { FaBars, FaCross } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 5;
  min-height: 64px;
  padding: 8px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  opacity: 1;
  transition: all 300ms ease-in-out;
  transform: none;

  ${theme.media('md')`
    transform: translateY(-100%);
    opacity: 0;
  `}
`;

const BurgerMenu = styled.button`
  padding: 8px;
  border-radius: 100px;
  background-color: ${theme.colors.accent.orange};
  align-items: center;
  display: flex;
  svg > path {
    fill: ${theme.colors.fg.default};
  }
  &:hover,
  &:focus {
    filter: brightness(1.5);
  }
`;

type Props = {
  onOpenMenu: () => void;
};

const Header: React.FC<Props> = ({ onOpenMenu }) => (
  <HeaderWrapper aria-label="Mobile header">
    <Typography> Sophia</Typography>
    <BurgerMenu type="button" onClick={onOpenMenu}>
      <FaBars />
    </BurgerMenu>
  </HeaderWrapper>
);

export default Header;
