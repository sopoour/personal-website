import { FC, useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import theme from '@app/styles/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProjectCard from '../ProjectCard';
import useSWR from 'swr';
import { Project } from '@app/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { Breakpoints } from '@app/styles/media';
import { flexRow, removeScrollBar } from '@app/styles/mixins';
import useKeyPress from '@app/hooks/useKeyPress';
import Section from '../layout/Section';

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
  color: ${theme.colors.fg.default};
  transition: all 0.3s ease-in-out;
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

  &:hover {
    color: ${theme.colors.accent.pink};
  }
`;

const Carousel = styled.div`
  position: relative;
  height: 30rem;
  width: 100%;
  perspective: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;

  // Mobile only
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    ${flexRow};
    width: 100%;
    height: 35rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    ${removeScrollBar};
    ${NavButton} {
      display: none;
    }
  }
`;

const Projects: FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const { data, isLoading } = useSWR<Project[]>('/api/projects', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowLeftPressed = useKeyPress('ArrowLeft');

  useEffect(() => {
    if (arrowLeftPressed) handlePrev();
    if (arrowRightPressed) handleNext();
  }, [arrowLeftPressed, arrowRightPressed]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Section id="projects" $maxWidth={0}>
      <Carousel className={'animate'}>
        <NavButton side="left" onClick={handlePrev} tabIndex={3}>
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
        <NavButton side="right" onClick={handleNext} tabIndex={4}>
          <IoIosArrowForward />
        </NavButton>
      </Carousel>
    </Section>
  );
};

export default Projects;
