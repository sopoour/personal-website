import { FC, useEffect, useRef, useState } from 'react';
import { Project } from '@app/types';
import {
  Card,
  DetailHeader,
  DetailsContainer,
  Links,
  ProjectThumbnail,
  TagsMobile,
} from './styles';
import Typography from '../Typography/Typography';
import useClickOutside from '@app/hooks/useClickOutside';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import useKeyPress from '@app/hooks/useKeyPress';

const MAX_VISIBILITY = 3;

type Props = {
  project: Project;
  activeIndex: number;
  projectIndex: number;
};

const ProjectCard: FC<Props> = ({ project, activeIndex, projectIndex }) => {
  const [view, setView] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  const isDesktop = useMedia(Breakpoints.xs);
  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  useClickOutside(ref, () => setView(false));

  // if any of the indexes change, turn around the card
  useEffect(() => setView(false), [activeIndex, projectIndex]);

  useEffect(() => {
    // if user uses arrows to navigate then make sure the correct card is in focus so onEnter it turns
    if (activeIndex === projectIndex && (arrowLeftPressed || arrowRightPressed))
      return ref.current?.focus();
  }, [activeIndex, projectIndex, arrowLeftPressed, arrowRightPressed]);

  return (
    <Card
      $offset={(activeIndex - projectIndex) / 3}
      $absOffset={Math.abs(activeIndex - projectIndex) / 3}
      direction={Math.sign(activeIndex - projectIndex)}
      style={
        isDesktop
          ? {
              opacity: Math.abs(activeIndex - projectIndex) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(activeIndex - projectIndex) > MAX_VISIBILITY ? 'none' : 'block',
              pointerEvents: activeIndex === projectIndex ? 'auto' : 'none',
            }
          : {}
      }
      $viewDetails={view}
      onClick={() => isDesktop && setView((prev) => !prev)}
      ref={ref}
      aria-label={`${project.id}-project-card`}
      tabIndex={activeIndex === projectIndex ? 0 : -1}
    >
      <DetailsContainer $projectId={project.id}>
        <DetailHeader>
          <Typography fontWeight={700}>{project.title}</Typography>
          <Links iconLinks={project.links} size="small" />
        </DetailHeader>
        <Typography fontSize={'14px'}>{project.description}</Typography>
        <TagsMobile tags={project.tags} />
      </DetailsContainer>
      <ProjectThumbnail
        src={`/data/images/${project.id}.png`}
        alt={`${project.title} - Project thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw"
      />
    </Card>
  );
};

export default ProjectCard;
