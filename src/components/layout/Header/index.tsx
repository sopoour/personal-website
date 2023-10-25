import theme from '@app/styles/theme';
import React, { useEffect } from 'react';
import { css, styled } from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { flexColumn } from '@app/styles/mixins';
import useSidebar from '@app/hooks/useSidebar';

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

const Line = styled.span<{ $isActive: boolean }>`
  width: 18px;
  height: 2px;
  background-color: ${theme.colors.fg.default};
  display: block;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(1) {
        -webkit-transform: translateY(6px) rotate(45deg);
        -ms-transform: translateY(6px) rotate(45deg);
        -o-transform: translateY(6px) rotate(45deg);
        transform: translateY(6px) rotate(45deg);
      }

      &:nth-child(3) {
        -webkit-transform: translateY(-4px) rotate(-45deg);
        -ms-transform: translateY(-4px) rotate(-45deg);
        -o-transform: translateY(-4px) rotate(-45deg);
        transform: translateY(-4px) rotate(-45deg);
      }
    `}

  &:hover {
    background-color: ${theme.colors.accent.green} !important;
  }
`;

const BurgerMenu = styled.button`
  padding: 8px;
  width: 35px;
  height: 35px;

  align-items: center;

  justify-content: center;
  ${flexColumn};
  gap: 3px;
  z-index: 100;

  &:hover {
    > ${Line} {
      background-color: ${theme.colors.accent.green} !important;
    }
  }
`;

const Header: React.FC = () => {
  const { open, setOpen } = useSidebar((state) => state);
  useEffect(() => {
    gsap.set('#burger-menu', { opacity: 0 });
    gsap.to('#burger-menu', {
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: '#mobile-header',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  return (
    <HeaderWrapper aria-label="Mobile header" id="mobile-header">
      <BurgerMenu
        onClick={setOpen}
        id="burger-menu"
        aria-label="Burger Menu button"
        aria-description="Burger Menu that is only visble on mobile"
      >
        <Line $isActive={open} />
        <Line $isActive={open} />
        <Line $isActive={open} />
      </BurgerMenu>
    </HeaderWrapper>
  );
};

export default Header;
