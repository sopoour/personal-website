import React, { FC, ReactNode, useState } from 'react';

import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from '../Sidebar';

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.main`
  max-width: 1000px;
  padding: 48px 20px;
  flex: 1;
  width: 100%;
  margin: 0 auto;
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
