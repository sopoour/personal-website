import { FC, useState } from 'react';
import { css, styled } from 'styled-components';
import theme from '@app/styles/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProjectCard from '../ProjectCard';
import useSWR from 'swr';
import { Project } from '@app/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import MaxWidthContainer from '../MaxWidthContainer';

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

const Projects: FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { data, isLoading } = useSWR<Project[]>('/api/projects', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);

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
