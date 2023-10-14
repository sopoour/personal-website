import { NextPage } from 'next';
import styled from 'styled-components';
import Projects from '@app/components/sections/Projects';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  padding: 20px 0 32px 0;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media('sm')`
    padding: 30px 0 48px 0;
  `}
`;

const Home: NextPage = () => {
  return (
    <Root title="Main page wrapper">
      <Projects />
    </Root>
  );
};

export default Home;
