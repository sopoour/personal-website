import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { flexColumn, flexRow } from '@app/styles/mixins';
import { styled } from 'styled-components';

export const RobotMono = styled.li`
  font-family: ${robotoMono.style.fontFamily};
`;

export const AboutContainer = styled.div`
  ${flexColumn};
  gap: 16px;

  ${({ theme }) => theme.media('sm')`
    gap: 40px;
  `}
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
  background-color: ${({ theme }) => theme.colors.bg.soft};
  box-shadow: 0 60px 50px -60px ${({ $color }) => $color};
  width: 85%;
  height: 275px;
  margin: 0 auto;
  padding: 32px 16px;

  h3,
  li {
    color: ${({ theme }) => theme.colors.bg.contrast} !important;
  }

  ${({ theme }) => theme.media('sm')`
  width: 275px;
  
  `}
`;

export const BulletWrapper = styled.ul`
  margin-left: 0;
  padding-left: 28px;

  > li {
    list-style: none;
    position: relative;
    font-size: 14px;
    text-align: start;
    line-height: 175%;
    &::before {
      content: '';
      position: absolute;
      left: -23px;
      top: 33%;
      width: 10px;
      height: 10px;
      transform: rotate(-45deg);
      border: 1.5px solid ${({ theme }) => theme.colors.bg.contrast};
      border-radius: 2px;
    }
  }
`;
