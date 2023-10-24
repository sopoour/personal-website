import { flexColumn } from '@app/styles/mixins';
import { FC, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { HEADER_HEIGHT } from './Header';
import theme from '@app/styles/theme';

const maxContainerPadding = { mobile: 20, desktop: 24 };

const SectionContainer = styled.section<{ $maxWidth?: number }>`
  ${flexColumn};
  gap: 40px;
  width: 100%;
  height: unset;
  padding: 32px ${maxContainerPadding.mobile}px;
  margin: 0 auto;
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth || 1000}px;

  ${(props) => props.theme.media('md')`
    padding: 40px ${maxContainerPadding.desktop}px;
    justify-content: center;
    height: 100vh;
  `}
`;

const MobileHeader = styled(Typography)`
  display: flex;
  position: sticky;
  align-items: center;
  top: -1px;
  z-index: 5;
  padding: 8px 0px;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  min-height: ${HEADER_HEIGHT}px;
  pointer-events: none;

  ${theme.media('md')`
    display: none;
  `}
`;

type Props = {
  $maxWidth?: number;
  children: ReactElement;
  className?: string;
  mobileTitle: string;
} & HTMLAttributes<unknown>;

const Section: FC<Props> = ({ children, className, $maxWidth, mobileTitle, ...props }) => {
  return (
    <SectionContainer $maxWidth={$maxWidth} className={className} {...props}>
      <MobileHeader as="h2">{mobileTitle}</MobileHeader>
      {children}
    </SectionContainer>
  );
};

export default Section;
