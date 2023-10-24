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
import Tags from '../Tags';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';

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

  useEffect(() => setView(false), [activeIndex, projectIndex]);
  useClickOutside(ref, () => setView(false));

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
