import { flexColumn } from '@app/styles/mixins';
import { styled } from 'styled-components';
import Typography from '../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { Breakpoints } from '@app/styles/media';

export const Container = styled.div`
  ${flexColumn};
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily};
  font-size: 20px;

  ${({ theme }) => theme.media('sm')`
    font-size: 24px;
  `}
`;

export const RotatingTitle = styled(SubTitle)`
  display: block;
  margin: 0;
  padding: 0;
  animation: rotateText 8s infinite 7s;
  text-align: center;

  @media only screen and (max-width: ${Breakpoints.xs}px) {
    color: ${({ theme }) => theme.colors.bg.soft};
  }

  @keyframes rotateText {
    16% {
      transform: translateY(-100%);
    }
    32% {
      transform: translateY(-200%);
    }
    48% {
      transform: translateY(-300%);
    }

    64% {
      transform: translateY(-400%);
    }

    80% {
      transform: translateY(-500%);
    }

    100% {
      transform: translateY(-600%);
    }
  }
`;

export const RotatingTitles = styled.span`
  overflow: hidden;
  box-sizing: content-box;
  height: 35px;
`;
