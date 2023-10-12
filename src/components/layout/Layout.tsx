import React, { FC, ReactNode, useEffect, useState } from 'react';

import { css, styled } from 'styled-components';
import Header from './Header';
import Sidebar from '../Sidebar';
import theme from '@app/styles/theme';
import Intro from '../Intro';

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
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
    <Root id="layout-root">
      <Intro />
      <Header onOpenMenu={() => setOpenMenu((prev) => !prev)} />
      <MainLayout>{children}</MainLayout>
      <Sidebar open={menuOpen} onClose={() => setOpenMenu(false)} />
    </Root>
  );
};

export default Layout;
