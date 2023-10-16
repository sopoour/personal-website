import { styled } from 'styled-components';
import Image from 'next/image';

import theme from '@app/styles/theme';
import Typography from '../Typography/Typography';
import { fadeIn, flexColumn } from '@app/styles/mixins';
import { IoIosArrowDown } from 'react-icons/io';
import Headline from '../Headline';

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
      width: 29rem;
    }
  }

  @keyframes typewriterMobile {
    from {
      width: 0;
    }
    to {
      width: 23rem;
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

export const ScrollArrowContainer = styled.button`
  ${flexColumn};
  justify-content: center;
  cursor: pointer;
  margin-top: 30px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards 5.75s;
  -webkit-animation: ${fadeIn} 1.5s forwards 5.75s;
  & svg {
    width: 25px !important;
    height: 25px !important;
    path {
      fill: ${theme.colors.fg.default};
    }
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

export const IntroHeadliine = styled(Headline)`
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards 5.5s;
  -webkit-animation: ${fadeIn} 1.5s forwards 5.5s;
`;
