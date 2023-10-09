import React, { FC, ReactNode, useState } from 'react';

import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from '../Sidebar';
import theme from '@app/styles/theme';

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainLayout = styled.main`
  padding: 48px 20px;
  flex: 1;
  width: 100%;
  margin: 0 auto;

  ${theme.media('md')`
   position: relative;
    left: 300px;
    width: calc(100% - 300px);
    margin: 0;
  `}
`;

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [menuOpen, setOpenMenu] = useState<boolean>(false);
  return (
    <Root>
      <Header onOpenMenu={() => setOpenMenu((prev) => !prev)} />
      <MainLayout>{children}</MainLayout>
      <Sidebar open={menuOpen} onClose={() => setOpenMenu(false)} />
    </Root>
  );
};

export default Layout;
