import { FC } from 'react';
import { BottomLeft, BottomRight, IntroContainer, LeftTop, TopRight } from './styles';

type Props = {
  children: React.ReactElement;
};

const GeoBackground: FC<Props> = ({ children }) => (
  <IntroContainer>
    <LeftTop />
    <TopRight />
    <BottomLeft />
    <BottomRight />
    {children}
  </IntroContainer>
);

export default GeoBackground;
