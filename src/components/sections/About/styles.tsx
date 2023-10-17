import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexColumn, flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { styled } from 'styled-components';

export const RobotMono = styled(Typography)`
  font-family: ${robotoMono.style.fontFamily};
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
  width: 100%;
  margin: 0 auto;

  ${Typography} {
    line-height: 1.75;
  }
`;

export const BoxWrapper = styled.div`
  ${flexRow};
  justify-content: space-between;
  column-gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
`;

export const Box = styled.div<{ $color: string }>`
  ${flexColumn};
  gap: 8px;
  border-radius: 24px;
  background-color: ${theme.colors.bg.soft};
  box-shadow: 0 60px 50px -60px ${({ $color }) => $color};
  width: 85%;
  height: 275px;
  margin: 0 auto;
  padding: 32px 16px;

  p,
  li {
    color: ${theme.colors.fg.contrast} !important;
  }

  ${theme.media('sm')`
width: 275px;
  
  `}
`;

export const BulletWrapper = styled.ul`
  margin-left: 0;
  padding-left: 16px;
  > li {
    padding-left: 8px;
  }
`;
