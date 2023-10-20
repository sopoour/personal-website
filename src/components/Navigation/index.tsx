import { FC } from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import { flexColumn } from '@app/styles/mixins';

const navItems = ['Projects', 'Experience', 'About', 'Skills & Tools'];

const Container = styled.nav`
  ${flexColumn};
  gap: 16px;
  width: 100%;
`;

type Props = {
  onClickItem?: () => void;
};

const Navigation: FC<Props> = ({ onClickItem }) => (
  <Container>
    {navItems.map((item) => (
      <NavigationItem item={item} key={item} onClickItem={onClickItem} />
    ))}
  </Container>
);

export default Navigation;
