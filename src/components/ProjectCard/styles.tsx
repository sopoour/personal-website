import { flexColumn, flexRow, slowTransition } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { css, styled } from 'styled-components';
import LinkContainer from '../LinkContainer';
import { Breakpoints } from '@app/styles/media';
import Image from 'next/image';
import Tags from '../Tags';

export const DetailsContainer = styled.div<{ $projectId: string }>`
  ${flexColumn};
  width: 85vw;
  padding: 20px;
  height: 100%;
  gap: 12px;
  background-image: ${({ $projectId }) =>
    `linear-gradient(to bottom, rgba(65,75,163, 0.75), rgba(11,14,43, 1)) , url(${`/data/images/${$projectId}.png`})`};
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  ${theme.media('xs')`
  box-shadow: 0 60px 50px -60px ${theme.colors.bg.soft};
  padding: 32px;
  width: 100%;
  opacity: 0;
  ${slowTransition};
  background-color: #0b0e2b;
  background-image: none;
  `}
`;

export const DetailHeader = styled.div`
  ${flexColumn};
  gap: 12px;
  justify-content: space-between;

  > p {
    font-size: 14px;
  }

  ${theme.media('xs')`
  ${flexRow};
  gap: 16px;
    > p {
      font-size: 16px;
      
    }
  `}
`;

export const ProjectThumbnail = styled(Image)`
  ${slowTransition};
  opacity: 1;
  object-fit: cover;
  position: relative;
  display: none;
  width: 100vw;
  height: 100%;
  border-radius: 10px;

  ${theme.media('xs')`
box-shadow: 0 60px 50px -60px ${theme.colors.bg.soft};
display: block;
  `}
`;

const pseudoEffects = css`
  &::after,
  &::before {
    position: absolute;
    bottom: -10px;
    display: block;
    opacity: 0;
    ${slowTransition};
  }

  &::after {
    content: '';
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(17, 22, 71, 0.5) 30%, rgba(255, 255, 255, 0) 100%);
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

export const Card = styled.button<{
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
  border-radius: 10px;
  transform-style: preserve-3d;
  transform: ${({ $absOffset, $offset, direction }) =>
    `rotateY(calc(${$offset} * 50deg)) 
    scaleY(calc(1 + ${$absOffset} * -0.4))
    translateZ(calc(${$absOffset} * -30rem))
    translateX(calc(${direction} * -5rem))`};
  filter: ${({ $absOffset }) => `blur(calc(${$absOffset} * 0.75rem))`};
  ${slowTransition};
  ${ProjectThumbnail} {
    filter: ${({ $absOffset }) => `brightness(calc(100% - (${$absOffset} * 50%)))`};
  }

  ${pseudoEffects};

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
    position: unset;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    transform: unset;
    margin-right: 12px;
    display: inline-block;
    filter: unset;

    ${ProjectThumbnail} {
      filter: unset;
    }

    &:hover {
      img {
        transform: unset;
      }
    }
  }

  ${theme.media('xs')`
    &:hover {
      ${slowTransition};
      img {
        transform: translateY(-20px);
      }

      &::after {
        bottom: 20px;
        opacity: 1;
      }
      &::before {
        bottom: 30%;
        opacity: 1;
      }
    }

  `}
`;

export const Links = styled(LinkContainer)`
  justify-content: flex-start;
  gap: 10px;
`;

export const TagsMobile = styled(Tags)`
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    p {
      filter: contrast(120%);
    }
  }
`;
