import { FC } from 'react';
import styled from 'styled-components';
import theme from '@app/styles/theme';
import { robotoMono } from '@app/styles/fonts';

const Item = styled.a`
  position: relative;
  width: 100%;
  transition: all 0.5s;
  font-size: 16px;
  font-family: ${robotoMono.style.fontFamily};

  &::before {
    content: '· ';
    position: relative;
    opacity: 0;
    left: -20px;
  }

  &:hover {
    color: ${theme.colors.accent.pink};
    transform: translateX(20px);
    &::before {
      content: '· ';
      opacity: 1;
      left: 0px;
    }
  }
`;

type Props = {
  item: string;
};

const NavigationItem: FC<Props> = ({ item }) => (
  <Item id={item} href="#">
    · · · {item}
  </Item>
);

export default NavigationItem;
