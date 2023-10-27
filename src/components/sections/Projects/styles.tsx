import Section from '@app/components/layout/Section';
import { Breakpoints } from '@app/styles/media';
import { flexRow, removeScrollBar } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { css, styled } from 'styled-components';

export const NavButton = styled.button<{ $side: 'left' | 'right' }>`
  color: white;
  font-size: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  color: ${theme.colors.fg.default};
  transition: all 0.3s ease-in-out;
  ${({ $side }) =>
    $side === 'left'
      ? css`
          transform: translate(-100%, -50%);
          left: 15%;
        `
      : css`
          right: 15%;
          transform: translate(100%, -50%);
        `};

  &:hover {
    color: ${theme.colors.accent.pink};
  }
`;

export const Carousel = styled.div`
  position: relative;
  height: 32rem;
  width: 100%;
  perspective: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;

  // Mobile only
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    ${flexRow};
    margin: auto;
    width: 100%;
    height: 36rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    ${removeScrollBar};
    ${NavButton} {
      display: none;
    }
  }
`;

export const ProjectSection = styled(Section)`
  gap: 48px;
  align-items: center;
  padding: 0;
  > h2 {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
