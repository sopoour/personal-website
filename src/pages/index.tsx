import MaxWidthContainer from '@app/components/MaxWidthContainer';
import ProjectCard from '@app/components/ProjectCard';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { Project } from '@app/types';
import { NextPage } from 'next';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import useSWR from 'swr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import theme from '@app/styles/theme';

const Root = styled.span`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0 32px 0;

  ${({ theme }) => theme.media('sm')`
    padding: 30px 0 48px 0;
  `}
`;

const Carousel = styled(MaxWidthContainer)`
  position: relative;
  width: 80%;
  height: 20rem;
  perspective: 500px;
  transform-style: preserve-3d;

  ${theme.media('sm')`
    height: 25rem;
    width: 60%;
    perspective: 500px;
  `}
`;

const DetailContainer = styled.div`
  padding: 0 20px;
`;

const NavButton = styled.button<{ side: 'left' | 'right' }>`
  color: white;
  font-size: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;

  ${({ side }) =>
    side === 'left'
      ? css`
          transform: translate(-100%, -50%);
          left: 10%;
        `
      : css`
          right: 10%;
          transform: translate(100%, -50%);
        `}
`;

const Home: NextPage = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { data, isLoading } = useSWR<Project[]>('/api/projects', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  if (isLoading) return <p>Loading...</p>;
  return (
    <Root>
      <Carousel>
        <NavButton side="left" onClick={handlePrev}>
          <IoIosArrowBack />
        </NavButton>
        {data &&
          data?.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.id}
              activeIndex={activeCard}
              projectIndex={index}
            />
          ))}
        <NavButton side="right" onClick={handleNext}>
          <IoIosArrowForward />
        </NavButton>
      </Carousel>
      <DetailContainer>
        <Typography textalign="center">Some text</Typography>
      </DetailContainer>
    </Root>
  );
};

export default Home;
