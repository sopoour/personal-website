import Typography from '@app/components/Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import { Breakpoints } from '@app/styles/media';
import { flexColumn, flexRow } from '@app/styles/mixins';
import theme from '@app/styles/theme';
import { styled } from 'styled-components';

export const ExperienceContainer = styled.div`
  ${flexColumn};
  gap: 16px;

  ${theme.media('sm')`
    gap: 28px;
  `}
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  gap: 8px;
`;

export const TimeWrapper = styled.div`
  ${flexRow};
  width: 100%;
  gap: 4px;
  & ${Typography} {
    font-family: ${robotoMono.style.fontFamily} !important;
    font-size: 12px;
    color: ${theme.colors.bg.soft};
  }

  > ${Typography}:first-of-type::after {
    content: ',';
  }

  &:not(:first-of-type) {
    margin-top: 32px;
  }

  ${theme.media('sm')`
    ${flexColumn};
    align-items: flex-start;

    > ${Typography}:first-of-type::after {
    content: '';
  }

  &:not(:first-of-type) {
    margin-top: 0;
  }
  `}
`;

export const Container = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${theme.media('sm')`
    grid-template-columns: max-content 1fr;
    gap: 40px 64px;    
  `}
`;

export const Header = styled.span`
  ${flexRow};
  gap: 16px;
`;

export const DownloadButton = styled.a`
  font-family: ${robotoMono.style.fontFamily};
  font-weight: 500;
  color: ${theme.colors.fg.default};
  ${flexRow};
  gap: 2px;

  > svg {
    margin-top: 3px;
    color: ${theme.colors.bg.soft};
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.1s ease-in-out;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.accent.green};
    text-underline-offset: 4px;
    > svg {
      transform: translateX(5px);
      color: ${theme.colors.accent.green};
    }
  }
`;
