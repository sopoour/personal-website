import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@app/types';
import styled, { css } from 'styled-components';
import { flexColumn } from '@app/styles/mixins';
import theme from '@app/styles/theme';

const MAX_VISIBILITY = 3;

const Card = styled.label<{
  $absOffset: number;
  $offset: number;
  direction: number;
  $viewDetails: boolean;
}>`
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  transform: ${({ $absOffset, $offset, direction }) =>
    `rotateY(calc(${$offset} * 50deg)) 
    scaleY(calc(1 + ${$absOffset} * -0.4))
    translateZ(calc(${$absOffset} * -30rem))
    translateX(calc(${direction} * -5rem))`};
  filter: ${({ $absOffset }) => `blur(calc(${$absOffset} * 0.75rem))`};
  transition: all 0.6s ease-in-out;
  transform-style: preserve-3d;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    filter: ${({ $absOffset }) => `brightness(calc(100% - (${$absOffset} * 50%)))`};
  }

  ${({ $viewDetails }) =>
    $viewDetails &&
    css`
      transition: all 0.6s ease-in-out;
      transform: rotateY(180deg);
    `}
`;

const DetailsContainer = styled.div`
  transition: all 0.3s ease-in-out;
  ${flexColumn};
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: ${theme.colors.bg.soft};
  transform: rotateY(180deg);
  border-radius: 10px;
`;

type Props = {
  project: Project;
  activeIndex: number;
  projectIndex: number;
};

const ProjectCard: FC<Props> = ({ project, activeIndex, projectIndex }) => {
  const projectId = project.title.toLowerCase().replace(/\s/g, '-');
  const [view, setView] = useState<boolean>(false);

  useEffect(() => setView(false), [activeIndex, projectIndex]);

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
      }}
      $viewDetails={view}
      onClick={() => setView((prev) => !prev)}
    >
      {view ? (
        <DetailsContainer>
          <p>{project.title}</p>
          <p>{project.description}</p>
        </DetailsContainer>
      ) : (
        <Image
          src={`/images/${project.id}.png`}
          alt={`${project.title} - Project thumbnail`}
          objectFit="cover"
          fill
        />
      )}
    </Card>
  );
};

export default ProjectCard;
