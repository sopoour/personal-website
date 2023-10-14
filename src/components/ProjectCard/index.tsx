import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Project } from '@app/types';
import { Card, DetailHeader, DetailsContainer, Links } from './styles';
import Typography from '../Typography/Typography';
import useClickOutside from '@app/hooks/useClickOutside';
import Tags from '../Tags';

const MAX_VISIBILITY = 3;

type Props = {
  project: Project;
  activeIndex: number;
  projectIndex: number;
};

const ProjectCard: FC<Props> = ({ project, activeIndex, projectIndex }) => {
  const projectId = project.title.toLowerCase().replace(/\s/g, '-');
  const [view, setView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setView(false), [activeIndex, projectIndex]);
  useClickOutside(ref, () => setView(false));

  return (
    <Card
      id={`card-${projectId}`}
      $offset={(activeIndex - projectIndex) / 3}
      $absOffset={Math.abs(activeIndex - projectIndex) / 3}
      direction={Math.sign(activeIndex - projectIndex)}
      style={{
        opacity: Math.abs(activeIndex - projectIndex) >= MAX_VISIBILITY ? '0' : '1',
        display: Math.abs(activeIndex - projectIndex) > MAX_VISIBILITY ? 'none' : 'block',
        pointerEvents: activeIndex === projectIndex ? 'auto' : 'none',
        /* zIndex: activeIndex === projectIndex ? 1 : -2, */
      }}
      $viewDetails={view}
      onClick={() => setView(true)}
      ref={ref}
    >
      <DetailsContainer>
        <DetailHeader>
          <Typography fontWeight={700}>{project.title}</Typography>
          <Links iconLinks={project.links} size="small" />
        </DetailHeader>
        <Typography fontSize={'14px'}>{project.description}</Typography>
        <Tags tags={project.tags} />
      </DetailsContainer>
      <Image
        src={`/data/images/${project.id}.png`}
        alt={`${project.title} - Project thumbnail`}
        objectFit="cover"
        fill
      />
    </Card>
  );
};

export default ProjectCard;
