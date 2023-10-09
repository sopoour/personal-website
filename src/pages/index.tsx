import MaxWidthContainer from '@app/components/MaxWidthContainer';
import Sidebar from '@app/components/Sidebar';
import Typography from '@app/components/Typography/Typography';
import { NextPage } from 'next';
import styled from 'styled-components';

const Root = styled.span`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0 32px 0;

  ${({ theme }) => theme.media('sm')`
    padding: 30px 0 48px 0;
  `}
`;

const TopWrapper = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DetailContainer = styled.div`
  padding: 0 20px;
`;

const Home: NextPage = () => {
  return (
    <Root>
      <TopWrapper>
        <Typography>
          I&apos;m passionate about building accessible, creative and inclusive products that have a
          positive impact on society and our environment. User experience and writing clean
          accessible code matter to me. I sweat the details, tho keeping in mind the holistic
          product experience. I&apos;m mostly self-taught but learn what I need to build the best
          possible solution. I&apos;ve worked several years as Product Manager until I&apos;ve
          decided to switch career to Frontend Development. I&apos;m happiest when I&apos;m
          creating, learning, exploring and thinking about how to make things better. My curiosity
          has been my leading driver to dive into different programming languages, frontend
          frameworks, design systems, animations, accessibility and much more. My motto is to always
          follow whatever sparks that awe in you, then try it, break it and try again.
        </Typography>
      </TopWrapper>
      <DetailContainer>
        <Typography textalign="center">Some text</Typography>
      </DetailContainer>
    </Root>
  );
};

export default Home;
