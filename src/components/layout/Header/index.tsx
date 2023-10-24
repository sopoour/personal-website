import Typography from '@app/components/Typography/Typography';
import theme from '@app/styles/theme';
import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { FaBars, FaCross } from 'react-icons/fa';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { flexColumn } from '@app/styles/mixins';

gsap.registerPlugin(ScrollTrigger);

export const HEADER_HEIGHT = 64;

const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: -1px;
  z-index: 5;
  min-height: ${HEADER_HEIGHT}px;
  padding: 8px 20px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  opacity: 1;
  transition: all 300ms ease-in-out;
  transform: none;
  background-color: ${theme.colors.bg.defaultBlur};
  backdrop-filter: ${theme.filters.backdrop};

  ${theme.media('md')`
    transform: translateY(-100%);
    opacity: 0;
  `}
`;

const Line = styled.span`
  width: 18px;
  height: 2px;
  background-color: ${theme.colors.fg.default};
  display: block;
  margin: 0 auto;
  -webkit-transition: transform 0.3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
`;

const BurgerMenu = styled.button<{ $isActive: boolean }>`
  padding: 8px;
  opacity: 0;
  width: 35px;
  height: 35px;

  align-items: center;

  justify-content: center;
  ${flexColumn};
  gap: 3px;
  z-index: 100;

  &:hover:not(:focus) {
    filter: brightness(0.8);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      ${Line}:nth-child(2) {
        opacity: 0;
      }

      ${Line}:nth-child(1) {
        -webkit-transform: translateY(6px) rotate(45deg);
        -ms-transform: translateY(6px) rotate(45deg);
        -o-transform: translateY(6px) rotate(45deg);
        transform: translateY(6px) rotate(45deg);
      }

      ${Line}:nth-child(3) {
        -webkit-transform: translateY(-4px) rotate(-45deg);
        -ms-transform: translateY(-4px) rotate(-45deg);
        -o-transform: translateY(-4px) rotate(-45deg);
        transform: translateY(-4px) rotate(-45deg);
      }
    `}
`;

type Props = {
  onOpenMenu: () => void;
  isOpen: boolean;
};

const Header: React.FC<Props> = ({ onOpenMenu, isOpen }) => {
  useEffect(() => {
    let logoTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#mobile-header',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    logoTl2.fromTo(
      '#burger-menu',
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
      },
    );
  }, []);

  return (
    <HeaderWrapper aria-label="Mobile header" id="mobile-header">
      <BurgerMenu
        onClick={onOpenMenu}
        id="burger-menu"
        $isActive={isOpen}
        aria-label="Burger Menu button"
        aria-description="Burger Menu that is only visble on mobile"
      >
        <Line />
        <Line />
        <Line />
      </BurgerMenu>
    </HeaderWrapper>
  );
};

export default Header;
