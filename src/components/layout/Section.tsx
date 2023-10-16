import { flexColumn } from '@app/styles/mixins';
import styled from 'styled-components';

const maxContainerPadding = { mobile: 20, desktop: 24 };

type Props = {
  $maxWidth?: number;
};

const Section = styled.section<Props>`
  ${flexColumn};
  gap: 32px;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  justify-content: center;
  padding-left: ${maxContainerPadding.mobile}px;
  padding-right: ${maxContainerPadding.mobile}px;
  margin: 0 auto;
  max-width: ${({ $maxWidth }) => $maxWidth || 1000}px;

  ${(props) => props.theme.media('sm')`
    padding-left: ${maxContainerPadding.desktop}px;
    padding-right: ${maxContainerPadding.desktop}px;
  `}
`;

export default Section;
