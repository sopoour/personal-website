import { styled } from 'styled-components';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { fadeIn, flexColumn } from '@app/styles/mixins';
import { IoIosArrowDown } from 'react-icons/io';
import Headline from '../Headline';
import { Breakpoints } from '@app/styles/media';
import { Question } from '../Outro';

export const ContentWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
  margin: auto;
  width: 100%;
  align-items: center;
  z-index: 10;

  ${({ theme }) => theme.media('sm')`
    width: 32rem;
  `}
`;

export const Title = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  font-size: 30px;
  animation:
    typewriterMobile 4s steps(30) 1s 1 normal both,
    cursor 700ms steps(30) 8;
  -webkit-animation:
    typewriterMobile 4s steps(30) 1s 1 normal both,
    cursor 700ms steps(30) 8;
  border-right: 2px solid ${({ theme }) => theme.colors.bg.default};
  > span {
    font-size: 20px;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 26rem;
    }
  }

  @keyframes typewriterMobile {
    from {
      width: 0;
    }
    to {
      width: 22rem;
    }
  }

  @keyframes cursor {
    from {
      border-right-color: ${({ theme }) => theme.colors.bg.default};
    }
    to {
      border-right-color: ${({ theme }) => theme.colors.accent.green};
    }
  }

  ${({ theme }) => theme.media('sm')`
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
  height: auto;
  opacity: 0;
  width: 70%;

  ${({ theme }) => theme.media('xs')`
    width: auto;
  `}
`;

export const ScrollArrowFadeElement = styled(IoIosArrowDown)`
  transition-duration: 400ms;
  opacity: 0.45;
  animation: downOne 3s ease-in-out infinite;
  margin-top: -20px;

  &:last-of-type {
    opacity: 0.2;
    animation: downTwo 3s ease-in-out infinite;
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

export const ScrollArrowContainer = styled.button`
  ${flexColumn};
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards 5.75s;
  -webkit-animation: ${fadeIn} 1.5s forwards 5.75s;
  & svg {
    width: 25px !important;
    height: 25px !important;
    path {
      fill: ${({ theme }) => theme.colors.fg.default};
    }
  }

  &:hover {
    transform: scale(1.2);
    svg > path {
      fill: ${({ theme }) => theme.colors.accent.green};
    }
  }

  ${({ theme }) => theme.media('xs')`
    margin-top: 30px;
  `}
`;

export const IntroHeadliine = styled(Headline)`
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards 5.5s;
  -webkit-animation: ${fadeIn} 1.5s forwards 5.5s;
`;

export const ContactMe = styled.span`
  ${flexColumn};
  gap: 8px;
  padding: 0 36px;
  ${({ theme }) => theme.media('xs')`
    margin-top: 32px;
    padding: 0;
  `}

  opacity: 0;
  animation: ${fadeIn} 1.5s forwards 5.5s;
  -webkit-animation: ${fadeIn} 1.5s forwards 5.5s;
`;
