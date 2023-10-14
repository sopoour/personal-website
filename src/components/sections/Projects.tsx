import { FC, useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import theme from '@app/styles/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProjectCard from '../ProjectCard';
import useSWR from 'swr';
import { Project } from '@app/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { useSwipe } from '@app/hooks/useSwipe';

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  perspective: 800px;
  margin: 0 auto;
  transform-style: preserve-3d;

  ${theme.media('sm')`
    height: 30rem;
    width: 80%;
    perspective: 500px;
  `}
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
  color: ${theme.colors.bg.default};
  ${({ side }) =>
    side === 'left'
      ? css`
          transform: translate(-100%, -50%);
          left: 15%;
        `
      : css`
          right: 15%;
          transform: translate(100%, -50%);
        `};

  ${theme.media('sm')`
      color: ${theme.colors.fg.default};
    `}
`;

const Projects: FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { data, isLoading } = useSWR<Project[]>('/api/projects', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  useSwipe({ left: handlePrev, right: handleNext });
  if (isLoading) return <p>Loading...</p>;

  return (
    <Carousel as="section" id="projects">
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
  );
};

export default Projects;
