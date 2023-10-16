import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Project } from '@app/types';
import { Card, DetailHeader, DetailsContainer, Links, ProjectThumbnail } from './styles';
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
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMedia(Breakpoints.sm);

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
      onClick={() => setView(true)}
      ref={ref}
    >
      <DetailsContainer>
        <DetailHeader>
          <Typography fontWeight={700}>{project.title}</Typography>
          <Links iconLinks={project.links} size="small" tabIndex={5} />
        </DetailHeader>
        <Typography fontSize={'14px'}>{project.description}</Typography>
        <Tags tags={project.tags} />
      </DetailsContainer>
      <ProjectThumbnail
        src={`/data/images/${project.id}.png`}
        alt={`${project.title} - Project thumbnail`}
        objectFit="cover"
        fill
      />
    </Card>
  );
};

export default ProjectCard;
