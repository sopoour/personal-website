import { FC, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProjectCard from '../../ProjectCard';
import useSWR from 'swr';
import { Project } from '@app/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useKeyPress from '@app/hooks/useKeyPress';
import LinkButton from '../../LinkButton';
import { Carousel, NavButton, ProjectSection } from './styles';

const Projects: FC = () => {
  const [activeCard, setActiveCard] = useState<number>(2);
  const { data } = useSWR<Project[]>('/api/projects', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowLeftPressed = useKeyPress('ArrowLeft');

  useEffect(() => {
    if (arrowLeftPressed) handlePrev();
    if (arrowRightPressed) handleNext();
  }, [arrowLeftPressed, arrowRightPressed]);

  return (
    <ProjectSection id="projects" $maxWidth={0} mobileTitle="Projects">
      <>
        <Carousel className={'animate-scale'} aria-label="carousel">
          <NavButton $side="left" onClick={handlePrev} tabIndex={0}>
            <IoIosArrowBack focusable="false" aria-hidden="true" />
            <span className="sr-only">Left Navigation</span>
          </NavButton>
          <NavButton $side="right" onClick={handleNext} tabIndex={0}>
            <IoIosArrowForward focusable="false" aria-hidden="true" />
            <span className="sr-only">Right Navigation</span>
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
        </Carousel>
        <LinkButton label="View more on Github" link="https://github.com/sopoour" />
      </>
    </ProjectSection>
  );
};

export default Projects;
