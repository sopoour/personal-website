import React, { FC, ReactNode } from 'react';

import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from '../Sidebar';
import theme from '@app/styles/theme';
import Intro from '../Intro';
import useGlobalGsapAnimation from '@app/hooks/useGlobalGsapAnimation';
import { flexColumn } from '@app/styles/mixins';
import Outro from '../Outro';

const Root = styled.div`
  ${flexColumn}
  width: 100%;
  position: relative;
  background-color: ${theme.colors.bg.default};
  z-index: 1;
  & > :nth-child(2) {
    order: 3;
  }

  & > :nth-child(3) {
    order: 2;
  }

  ${theme.media('md')`
   flex-direction: row;

    & > :nth-child(2) {
      order: 2;
    }

    & > :nth-child(3) {
      order: 3;
    }
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
  useGlobalGsapAnimation();

  return (
    <>
      <Intro />
      <Root id="main-root">
        <Sidebar />
        <MainLayout>
          <Header />
          {children}
        </MainLayout>
      </Root>
      <Outro />
    </>
  );
};

export default Layout;
