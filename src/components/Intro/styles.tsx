import { css, keyframes, styled } from 'styled-components';

import Geo1 from '@app/assets/geo1.svg';
import Geo2 from '@app/assets/geo2.svg';
import Geo3 from '@app/assets/geo3.svg';
import Geo4 from '@app/assets/geo4.svg';
import theme from '@app/styles/theme';
import Typography from '../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexColumn } from '@app/styles/mixins';

const rotate1 = keyframes`
    10% {
      transform: rotate(1deg);
    }
    80% {
      transform: rotate(-2deg);
    }
`;
const rotate2 = keyframes`
    10% {
      transform: rotate(-2deg);
    }
    80% {
      transform: rotate(2deg);
    }
`;

const transformInitial = css`
  transform: translateX(0) translateY(0) scale(1);
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
  position: absolute;
  bottom: 50%;
  left: calc(50% - 225px);
  width: max-content;
  align-items: center;
`;

export const Title = styled(Typography)`
  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  animation:
    typewriter 6s steps(30) 1s 1 normal both,
    cursor 900ms steps(30) 8;
  border-right: 2px solid ${theme.colors.bg.default};
  > span {
    font-size: 20px;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 450px;
    }
  }

  @keyframes cursor {
    from {
      border-right-color: ${theme.colors.bg.default};
    }
    to {
      border-right-color: ${theme.colors.accent.green};
    }
  }
`;

export const SubTitle = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily} !important;
  opacity: 0;
  animation: fadeIn 3s forwards;
  animation-delay: 7s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const IntroContainer = styled.div<{ $moveAway: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${theme.colors.bg.default};
  display: flex;
  flex-flow: column wrap;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  gap: 16px;
  opacity: 1;

  > svg {
    position: fixed;
    flex-shrink: 0;
    z-index: 11;
  }

  ${({ $moveAway }) =>
    $moveAway &&
    css`
      transform: translateY(-150%);
      opacity: 0;
    `}
`;

export const LeftTop = styled(Geo1)`
  top: -8%;
  left: -40%;
  animation:
    appearTopLeft 12.5s linear,
    ${rotate1} 12.5s infinite;

  @keyframes appearTopLeft {
    0% {
      transform: translateX(-100px) translateY(-100px) scale(0.5);
    }
    100% {
      ${transformInitial};
    }
  }

  ${theme.media('sm')`
    top: -2%;
    left: -10%;
  `}

  ${theme.media('md')`
    top: -1%;
    left: -2%;
  `}
`;

export const TopRight = styled(Geo2)`
  top: -15%;
  right: -15%;
  animation:
    appearTopRight 12.5s linear,
    ${rotate2} 12.5s infinite;
  @keyframes appearTopRight {
    0% {
      transform: translateX(100px) translateY(-50px) scale(0.5);
    }
    100% {
      ${transformInitial};
    }
  }

  ${theme.media('sm')`
    top: -10%;
  right: -10%;
  `}

  ${theme.media('md')`
    top: -5%;
    right: -2%;
  `}
`;

export const BottomLeft = styled(Geo3)`
  bottom: -10%;
  left: -20%;
  animation:
    appearBottomLeft 12.5s linear,
    ${rotate2} 12.5s infinite;

  @keyframes appearBottomLeft {
    0% {
      transform: translateX(-100px) translateY(100px) scale(0.5);
    }
    100% {
      ${transformInitial};
    }
  }

  ${theme.media('sm')`
    bottom: -8%;
    left: -10%;
  `}

  ${theme.media('md')`
    bottom: -5%;
    left: -1%;
  `}
`;

export const BottomRight = styled(Geo4)`
  bottom: -15%;
  right: -30%;
  animation:
    appearBottomRight 12.5s linear,
    ${rotate1} 12.5s infinite;

  @keyframes appearBottomRight {
    0% {
      transform: translateX(100px) translateY(100px) scale(0.5);
    }
    100% {
      ${transformInitial};
    }
  }

  ${theme.media('sm')`
    bottom: -5%;
    right: -10%;
  `}

  ${theme.media('md')`
    bottom: -5%;
    right: -5%;
  `}
`;
