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
        <Carousel className={'animate-scale'}>
          <NavButton $side="left" onClick={handlePrev} aria-label="navigation-left">
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
          <NavButton $side="right" onClick={handleNext} aria-label="navigation-right">
            <IoIosArrowForward />
          </NavButton>
        </Carousel>
        <LinkButton label="View more on Github" link="https://github.com/sopoour" />
      </>
    </ProjectSection>
  );
};

export default Projects;