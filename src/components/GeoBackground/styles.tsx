import styled from 'styled-components';
import Geo1 from './assets/geo1.svg';
import Geo2 from './assets/geo2.svg';
import Geo3 from './assets/geo3.svg';
import Geo4 from './assets/geo4.svg';

export const IntroContainer = styled.div`
  background: ${({ theme }) => theme.colors.bg.default};
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  width: 100%;
  transition: all 0.75s ease-in-out;
  -webkit-transition: all 0.75s ease-in-out;
  gap: 16px;
  opacity: 1;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  > svg {
    position: fixed;
    flex-shrink: 0;
    opacity: 0;
  }
`;

export const LeftTop = styled(Geo1)`
  top: -15%;
  left: -55%;

  ${({ theme }) => theme.media('sm')`
    top: -2%;
    left: -10%;
  `}

  ${({ theme }) => theme.media('md')`
    top: -1%;
    left: -2%;
  `}
`;

export const TopRight = styled(Geo2)`
  top: -25%;
  right: -25%;

  ${({ theme }) => theme.media('sm')`
    top: -10%;
  right: -10%;
  `}

  ${({ theme }) => theme.media('md')`
    top: -5%;
    right: -2%;
  `}
`;

export const BottomLeft = styled(Geo3)`
  bottom: -15%;
  left: -40%;

  ${({ theme }) => theme.media('sm')`
    bottom: -8%;
    left: -10%;
  `}

  ${({ theme }) => theme.media('md')`
    bottom: -5%;
    left: -1%;
  `}
`;

export const BottomRight = styled(Geo4)`
  bottom: -25%;
  right: -40%;

  ${({ theme }) => theme.media('sm')`
    bottom: -5%;
    right: -10%;
  `}

  ${({ theme }) => theme.media('md')`
    bottom: -5%;
    right: -5%;
  `}
`;
