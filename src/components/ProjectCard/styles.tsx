import { flexColumn, flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { css, styled } from 'styled-components';
import LinkContainer from '../LinkContainer';
import { Breakpoints } from '@app/styles/media';
import Image from 'next/image';

const transition = css`
  transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
`;

export const DetailsContainer = styled.div`
  opacity: 0;
  ${transition};
  ${flexColumn};
  width: 80vw;
  padding: 20px;
  height: 100%;
  gap: 8px;
  background-color: #0b0e2b;
  border-radius: 10px;

  ${theme.media('md')`
  box-shadow: 0 60px 50px -60px ${theme.colors.bg.soft};
  padding: 32px;
  width: 100%;
  `}
`;

export const DetailHeader = styled.div`
  ${flexRow};
  gap: 16px;
`;

export const ProjectThumbnail = styled(Image)`
  ${transition};
  opacity: 1;
  position: relative;

  width: 100vw;
  height: 100%;
  border-radius: 10px;

  ${theme.media('md')`
box-shadow: 0 60px 50px -60px ${theme.colors.bg.soft};
  `}
`;

const pseudoEffects = css`
  &::after,
  &::before {
    position: absolute;
    bottom: -10px;
    display: block;
    opacity: 0;
    ${transition};
  }

  &::after {
    content: '';
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(17, 22, 71, 0.3) 40%, rgba(255, 255, 255, 0) 100%);
  }

  &::before {
    z-index: 2;
    content: 'View details';
    font-weight: 500;
    width: max-content;
    height: max-content;
    border-radius: 4px;
    padding: 4px 12px;
    left: calc(50% - 55px);
    background-color: ${theme.colors.bg.soft};
    color: ${theme.colors.bg.default};
  }
`;

const viewedStyle = css`
  transform: rotateY(180deg);
  img {
    opacity: 0;
    // so I can use the links in the header
    z-index: -1;
  }
  cursor: auto;

  ${DetailsContainer} {
    opacity: 1;
    transform: rotateY(180deg);
  }

  // so I can use the links in the header
  &::after,
  &:before {
    z-index: -1;
  }

  // don't do hover effect when details card is shown
  &:hover {
    &::after,
    &:before {
      opacity: 0;
    }
  }
`;

export const Card = styled.div<{
  $absOffset: number;
  $offset: number;
  direction: number;
  $viewDetails: boolean;
}>`
  position: absolute;
  width: 65%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border-radius: 10px;
  transform: ${({ $absOffset, $offset, direction }) =>
    `rotateY(calc(${$offset} * 50deg)) 
    scaleY(calc(1 + ${$absOffset} * -0.4))
    translateZ(calc(${$absOffset} * -30rem))
    translateX(calc(${direction} * -5rem))`};
  filter: ${({ $absOffset }) => `blur(calc(${$absOffset} * 0.75rem))`};
  ${transition};
  ${ProjectThumbnail} {
    filter: ${({ $absOffset }) => `brightness(calc(100% - (${$absOffset} * 50%)))`};
  }

  ${pseudoEffects};

  &:hover {
    ${transition};
    img {
      transform: translateY(-20px);
    }

    &::after {
      bottom: -10px;
      opacity: 1;
    }
    &::before {
      bottom: 30%;
      opacity: 1;
    }
  }

  &:focus {
    outline: 3px solid ${theme.colors.accent.pink};
    border-radius: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }

  ${({ $viewDetails }) => $viewDetails && viewedStyle};

  // Mobile only
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    width: 100%;
    position: static;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    transform: unset;
    margin-right: 12px;
    display: inline-block;
    filter: unset;
    ${pseudoEffects};
    &::after {
      bottom: -10px !important;
      opacity: 1 !important;
    }
    &::before {
      bottom: 30% !important;
      opacity: 1 !important;
    }

    ${({ $viewDetails }) => $viewDetails && viewedStyle};

    ${ProjectThumbnail} {
      filter: unset;
    }

    &:hover {
      img {
        transform: unset;
      }
    }
  }
`;

export const Links = styled(LinkContainer)`
  gap: 10px;
  margin-bottom: 4px;
  svg {
    &:hover {
      path {
        fill: ${theme.colors.fg.default};
        opacity: 1;
      }
    }
  }
`;
