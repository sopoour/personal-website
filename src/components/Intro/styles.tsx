import { css, keyframes, styled } from 'styled-components';
import Image from 'next/image';
import Geo1 from '@app/assets/geo1.svg';
import Geo2 from '@app/assets/geo2.svg';
import Geo3 from '@app/assets/geo3.svg';
import Geo4 from '@app/assets/geo4.svg';
import theme from '@app/styles/theme';
import Typography from '../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexColumn } from '@app/styles/mixins';
import { IoIosArrowDown } from 'react-icons/io';

const rotate1 = keyframes`
    10% {
      transform: rotate(1deg);
      -webkit-transform: rotate(1deg);
    }
    80% {
      transform: rotate(-2deg);
      -webkit-transform: rotate(-2deg);
    }
`;
const rotate2 = keyframes`
    10% {
      transform: rotate(-2deg);
      -webkit-transform: rotate(-2deg);
    }
    80% {
      transform: rotate(2deg);
      -webkit-transform: rotate(2deg);
    }
`;

const fadeIn = keyframes`
  
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  
`;

const transformInitial = css`
  transform: translateX(0) translateY(0) scale(1);
  -webkit-transform: translateX(0) translateY(0) scale(1);
`;

export const ContentWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
  margin: auto;
  width: 100%;
  align-items: center;

  ${theme.media('sm')`
    width: 32rem;
  `}
`;

export const Title = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  font-size: 30px;
  animation:
    typewriterMobile 4s steps(30) 2s 1 normal both,
    cursor 700ms steps(30) 8;
  -webkit-animation:
    typewriterMobile 4s steps(30) 2s 1 normal both,
    cursor 700ms steps(30) 8;
  border-right: 2px solid ${theme.colors.bg.default};
  > span {
    font-size: 20px;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 30rem;
    }
  }

  @keyframes typewriterMobile {
    from {
      width: 0;
    }
    to {
      width: 24rem;
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

  ${theme.media('sm')`
    font-size: 40px;
    animation:
    typewriter 4s steps(30) 1s 1 normal both,
    cursor 700ms steps(30) 8;
  -webkit-animation:
    typewriter 4s steps(30) 1s 1 normal both,
    cursor 700ms steps(30) 8;
  `}
`;

export const SubTitle = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily};
  opacity: 0;
  font-size: 20px;
  animation: ${fadeIn} 3s forwards 6s;
  -webkit-animation: ${fadeIn} 3s forwards 6s;

  ${theme.media('sm')`
    font-size: 24px;
  `}
`;

export const IntroContainer = styled.div<{ $moveAway: boolean }>`
  background: ${theme.colors.bg.default};
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  transition: all 0.75s ease-in-out;
  -webkit-transition: all 0.75s ease-in-out;
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
      transform: translateY(-200%);
      -webkit-transform: translateY(-200%);
      opacity: 0;
      height: 0;
    `}
`;

export const LeftTop = styled(Geo1)`
  top: -8%;
  left: -40%;
  animation:
    appearTopLeft 12.5s linear,
    ${rotate1} 12.5s infinite;
  -webkit-animation:
    appearTopLeft 12.5s linear,
    ${rotate1} 12.5s infinite;

  @keyframes appearTopLeft {
    0% {
      transform: translateX(-100px) translateY(-100px) scale(0.5);
      -webkit-transform: translateX(-100px) translateY(-100px) scale(0.5);
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
  -webkit-animation:
    appearTopRight 12.5s linear,
    ${rotate2} 12.5s infinite;
  @keyframes appearTopRight {
    0% {
      transform: translateX(100px) translateY(-50px) scale(0.5);
      -webkit-transform: translateX(100px) translateY(-50px) scale(0.5);
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
  -webkit-animation:
    appearBottomLeft 12.5s linear,
    ${rotate2} 12.5s infinite;

  @keyframes appearBottomLeft {
    0% {
      transform: translateX(-100px) translateY(100px) scale(0.5);
      -webkit-transform: translateX(-100px) translateY(100px) scale(0.5);
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
  -webkit-animation:
    appearBottomRight 12.5s linear,
    ${rotate1} 12.5s infinite;

  @keyframes appearBottomRight {
    0% {
      transform: translateX(100px) translateY(100px) scale(0.5);
      -webkit-transform: translateX(100px) translateY(100px) scale(0.5);
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

export const ProfileImage = styled(Image)`
  width: 100% !important;
  height: auto !important;
  animation: fadeInScale 2s forwards;
  -webkit-animation: fadeInScale 2s forwards;
  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ScrollArrowFadeElement = styled(IoIosArrowDown)`
  transition-duration: 400ms;
`;

export const ScrollArrowContainer = styled.div`
  ${flexColumn};
  justify-content: center;
  margin-top: 30px;
  opacity: 0;
  animation: ${fadeIn} 3s forwards 6.5s;
  -webkit-animation: ${fadeIn} 3s forwards 6.5s;
  & svg {
    width: 25px !important;
    height: 25px !important;
  }

  ${ScrollArrowFadeElement} {
    opacity: 0.45;
    animation: downOne 3s ease-in-out infinite;
    margin-top: -20px;
  }

  ${ScrollArrowFadeElement}:last-of-type {
    opacity: 0.2;
    animation: downTwo 3s ease-in-out infinite;
  }

  &:hover {
    transform: scale(1.2);
    svg > path {
      fill: ${theme.colors.accent.green};
    }
  }

  @keyframes downOne {
    0% {
      transform: translateY(-4px);
    }
    40%,
    60% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(-4px);
    }
  }

  @keyframes downTwo {
    0% {
      transform: translateY(-8px);
    }
    40%,
    60% {
      transform: translateY(40%);
    }
    100% {
      transform: translateY(-8px);
    }
  }
`;
