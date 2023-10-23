import React, { FC, ReactNode, useLayoutEffect, useState } from 'react';

import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from '../Sidebar';
import theme from '@app/styles/theme';
import Intro from '../Intro';
import GeoBackground from '../GeoBackground';
import useGsapAnimation from '@app/hooks/useGsapAnimation';
import { flexColumn } from '@app/styles/mixins';

const Root = styled.div`
  ${flexColumn}
  width: 100%;
  position: relative;
  background-color: ${theme.colors.bg.default};
  z-index: 1;

  ${theme.media('md')`
   flex-direction: row;
  `}
`;

const MainLayout = styled.main`
  ${flexColumn};
  gap: 40px;
  padding: 48px 0;
  flex: 1;
  width: 100%;
  margin: 0 auto;

  ${theme.media('md')`
   position: relative;
    width: calc(100% - 300px);
    margin: 0;
  `}
`;

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [menuOpen, setOpenMenu] = useState<boolean>(false);

  useGsapAnimation();

  return (
    <>
      <Intro />
      <Root id="main-root">
        <Sidebar open={menuOpen} onClose={() => setOpenMenu(false)} />
        <MainLayout>
          <Header onOpenMenu={() => setOpenMenu((prev) => !prev)} isOpen={menuOpen} />
          {children}
        </MainLayout>
      </Root>
      <GeoBackground>
        <p style={{ marginTop: '20%', marginLeft: '35%' }}>
          Place here IntroHeader, the about me section and a good bye
        </p>
      </GeoBackground>
    </>
  );
};

export default Layout;
