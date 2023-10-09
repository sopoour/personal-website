import { FC } from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import { flexColumn } from '@app/styles/mixins';

const navItems = ['Projects', 'About', 'Experience', 'Skills & Tools'];

const Container = styled.nav`
  ${flexColumn};
  gap: 16px;
  width: 100%;
`;

const Navigation: FC = () => (
  <Container>
    {navItems.map((item) => (
      <NavigationItem item={item} key={item} />
    ))}
  </Container>
);

export default Navigation;
