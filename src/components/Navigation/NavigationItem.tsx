import { FC } from 'react';
import styled from 'styled-components';
import theme from '@app/styles/theme';
import { robotoMono } from '@app/styles/fonts';
import { Link } from 'react-scroll';

const Item = styled(Link)`
  position: relative;
  width: 100%;
  transition: all 0.5s;
  font-size: 16px;
  font-family: ${robotoMono.style.fontFamily};
  color: ${theme.colors.fg.inactive};
  &::before {
    content: '· ';
    position: relative;
    opacity: 0;
    left: -20px;
  }

  &:not(.active) {
    cursor: pointer;
  }

  &:hover,
  &.active {
    color: ${theme.colors.accent.green};
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
  <Item
    id={item}
    tabIndex={1}
    activeClass="active"
    to={item.toLowerCase().replace(/\s/g, '-')}
    spy
    smooth
    offset={item === 'Projects' ? -145 : -70}
    duration={500}
  >
    · · · {item}
  </Item>
);

export default NavigationItem;
