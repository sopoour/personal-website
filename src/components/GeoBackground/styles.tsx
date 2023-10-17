import theme from '@app/styles/theme';
import styled, { css, keyframes } from 'styled-components';
import Geo1 from '@app/assets/geo1.svg';
import Geo2 from '@app/assets/geo2.svg';
import Geo3 from '@app/assets/geo3.svg';
import Geo4 from '@app/assets/geo4.svg';

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

const transformInitial = css`
  transform: translateX(0) translateY(0) scale(1);
  -webkit-transform: translateX(0) translateY(0) scale(1);
`;

export const IntroContainer = styled.section`
  background: ${theme.colors.bg.default};
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  width: 100%;
  z-index: -1;
  transition: all 0.75s ease-in-out;
  -webkit-transition: all 0.75s ease-in-out;
  gap: 16px;
  opacity: 1;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  > svg {
    position: fixed;
    flex-shrink: 0;
  }
`;

export const LeftTop = styled(Geo1)`
  top: -10%;
  left: -50%;
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
  top: -20%;
  right: -20%;
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
  bottom: -15%;
  left: -30%;
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
  bottom: -20%;
  right: -35%;
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
