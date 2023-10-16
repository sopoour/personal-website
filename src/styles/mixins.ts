import { css, keyframes } from 'styled-components';
import theme from './theme';

export const removeScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const truncateText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const mobileOnly = css`
  display: block;
  ${theme.media('sm')`
    display: none;
  `}
`;

export const desktopOnly = css`
  display: none;
  ${theme.media('sm')`
    display: initial;
  `}
`;

// animations

export const fadeIn = keyframes`
  
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  
`;
