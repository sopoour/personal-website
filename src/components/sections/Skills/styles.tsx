import { flexColumn, flexRow } from '@app/styles/mixins';
import { styled } from 'styled-components';
import Ball from './assets/ball.svg';
import Typography from '@app/components/Typography/Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px;
  margin: 0 auto;
`;

export const BallVar = styled(Ball)<{ fill: string }>`
  circle:first-of-type {
    fill: ${({ fill }) => fill};
  }
`;

export const BallWrapper = styled.li`
  list-style: none;
  width: 88px;
  height: 88px;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  ${Typography} {
    position: absolute;
    width: 88px;
    text-align: center;
    height: max-content;
    font-weight: 500;
    overflow-wrap: break-word;
    hyphens: manual;
    left: 0;
    right: 0;
    top: -10%;
    bottom: 0;
    margin: auto;
    color: ${({ theme }) => theme.colors.fg.contrast};
  }
`;

export const Column = styled.div`
  ${flexColumn};
  gap: 32px;
  align-items: center;
`;

export const Bucket = styled.ul`
  ${flexRow};
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  height: 25%;
  max-width: 275px;
  margin: 0;
  padding: 0;
`;
