import { FC } from 'react';
import styled from 'styled-components';
import { robotoMono } from '@app/styles/fonts';
import { Link } from 'react-scroll';

const Item = styled(Link)`
  position: relative;
  width: 100%;
  transition: all 0.5s;
  font-size: 14px;
  font-family: ${robotoMono.style.fontFamily};
  color: ${({ theme }) => theme.colors.fg.defaultBlur};
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
    color: ${({ theme }) => theme.colors.accent.green};
    transform: translateX(20px);
    &::before {
      content: '· ';
      opacity: 1;
      left: 0px;
    }
  }

  ${({ theme }) => theme.media('md')`
    font-size: 16px;
  `}
`;

type Props = {
  item: string;
  onClickItem?: () => void;
};

const NavigationItem: FC<Props> = ({ item, onClickItem }) => {
  const navItemName = item.toLowerCase();
  return (
    <Item
      id={item}
      activeClass="active"
      to={navItemName}
      spy
      smooth
      duration={700}
      href={`#${navItemName}`}
      onClick={onClickItem}
    >
      · · · {item}
    </Item>
  );
};

export default NavigationItem;
